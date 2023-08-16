import { APITOSTORE } from "../Action/Action";


const storereducer=(state=[],{type,payload})=>{
switch(type){
    case APITOSTORE:
        return payload;
        default:
            return state
}
}

export default storereducer