import axios from 'axios';

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GET_ALL_EPISODES = "GET_ALL_EPISODES";
export const CREATE_CHARACTER = "CREATE_CHARACTER";

export const getAllCharacters = () => { 
    return function(dispatch){
      return fetch(`http://localhost:3001/characters`)
        .then((response) => response.json())
        .then((data) => {
       dispatch({
           type: GET_ALL_CHARACTERS, payload: data
       });
    });
   };
};


export function createCharacter(values){
    console.log("Desde el ACTIONS",values);
    // return{
    //     type:CREATE_CHARACTER, payload:values
    // }
    return function(dispatch){
        return axios.post(`http://localhost:3001/character`,values)
          .then((data) => {
            console.log("Dispatch",dispatch)

         dispatch({
             type: GET_ALL_EPISODES, payload: data
         });
      });
     };
}

export const getAllEpisodes = () => { 
    return function(dispatch){
      return fetch(`http://localhost:3001/episodes`)
        .then((response) => response.json())
        .then((data) => {
       dispatch({
           type: GET_ALL_EPISODES, payload: data
       });
    });
   };
};
