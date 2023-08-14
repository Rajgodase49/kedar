import { addformdata } from "./Action";



const addsignupdata=(data)=>{
    return{
        type:addformdata,
        payload:data
    }
}

export default addsignupdata