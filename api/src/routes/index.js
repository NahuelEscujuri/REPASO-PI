const { Router } = require("express");
const { Character, Episode } = require("../db");
const axios = require('axios');
const { Op } = require('sequelize');

const router = Router();

// Configurar los routers

router.get('/',(req,res,next)=>{
    res.send("walabadopdob");
})

router.get('/characters',async(req,res,next)=>{
    try{
        let cRequestDb;
        let cRequestApi;

        cRequestDb = await Character.findAll();
        axios('https://rickandmortyapi.com/api/character').then(r =>{
            cRequestApi = r.data.results;
            let allCharacters = [...cRequestDb,...cRequestApi];
            res.send(allCharacters);
      })
    }
    catch(e){
        next(e)
    }
})

router.get('/episodes',async (req,res,next)=>{
    try{
        //Revisar si esta el id episodio en la base de datos si no esta se lo pushea
        let eRequestDb;
        let eRequestApi;

        eRequestDb = await Episode.findAll();
        await axios('https://rickandmortyapi.com/api/episode').then(async r =>{
            eRequestApi = r.data.results;
            
            //Comprobar si el episodio ya esta en la base de datos
            eRequestApi.map(async ep=>{
                let dbEpisode = await Episode.findAll({
                    where:{
                        id:{
                            [Op.eq]: ep.id
                        }
                    }
                })
                // console.log(dbEpisode);
                if(dbEpisode==false){
                    const{id,name} = ep;
                    await Episode.create({
                        id, name
                    })
                }
            })
        })
        console.log(eRequestDb == false);
        eRequestDb == false?res.send(eRequestApi):res.send(eRequestDb);
    }
    catch(e){
        next(e)
    }
})

router.post('/character',async (req,res,next)=>{
    try{
        const{id,name,species,origin,image,created} = req.body;
        const newCharacter = await Character.create({
            id,name,species,origin,image,created
        });
        res.send(newCharacter);
    }
    catch(e){
        next(e);
    }
})

module.exports = router;
