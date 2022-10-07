import {GET_ALL_CHARACTERS,GET_ALL_EPISODES,CREATE_CHARACTER} from './actions'

const initialState = {
    characters:[],
    episodes:[]
};

export default function rootReducer(state = initialState ,actions) {
  switch(actions.type){
    case GET_ALL_CHARACTERS:
        return{
            ...state,
            characters:actions.payload
        }

    case GET_ALL_EPISODES:
        return{
            ...state,
            episodes:actions.payload
        }

    case CREATE_CHARACTER:
        console.log("Desde el REDUCER",actions.payload)
        console.log("State",state.characters)
        return{
            ...state,
            characters:[...state.characters,actions.payload]
        }
    default:
        return {...state}
  }
}

