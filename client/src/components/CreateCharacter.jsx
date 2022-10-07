import React from "react";
import { useDispatch } from "react-redux";
import { createCharacter } from "../redux/actions.js";
import * as actions from "../redux/actions.js";
import { Link } from "react-router-dom";

export default function CreateCharacter(){
    let [input,setInput]= React.useState({
        name:"",
        species:"",
        origin:""
    })

    function handleChange(e){
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        dispatch(actions.createCharacter(input));
        setInput({name:"", species:"", origin:""})
    }

    return(
        <>
        <div className="center marginTop">
            <h1>Create <span>Character</span></h1>
            <form onSubmit={e=>handleSubmit(e)}>
                <div className="txt_field">
                        <input type="text" required name={"name"} value={input.name}
                         onChange={(e)=>handleChange(e)}/>
                         <span></span>
                         <label>Name</label>
                </div>
                <div className="txt_field">
                         <input type="text" required name={"species"} value={input.species}
                         onChange={(e)=>handleChange(e)}/>
                         <span></span>
                         <label>Species</label>
                </div>
                <div className="txt_field">
                        <input type="text" required name={"origin"} value={input.origin}
                         onChange={(e)=>handleChange(e)}/>
                         <span></span>
                         <label>Origin</label>
                </div>
                <input type="submit" value="CREATE" className="btn-submit"/>
            </form>
        </div>

        </>
    )
}