import { addformdata,APITOSTORE } from "./Action";



const addsignupdata=(data)=>{
    return{
        type:addformdata,
        payload:data
    }
}

export default addsignupdata

export const apitostore =(data)=>{
    return{
        type:APITOSTORE,
        payload:data
    }
}