import { addformdata } from "../Action/Action";



const formreducer=(state=[],{type,payload})=>{
    switch(type){
        case addformdata:
            return [ ...state,payload];
            default:
                return state;
    }
}

export default formreducer