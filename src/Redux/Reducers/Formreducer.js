import { addformdata } from "../Action/Action";

const ini =[];

const formreducer=(state=[],{type,payload})=>{
    switch(type){
        case addformdata:
            return [ ...state,payload];
            default:
                return state;
    }
}

export default formreducer