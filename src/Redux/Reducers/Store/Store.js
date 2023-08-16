import {createStore,combineReducers } from "redux"
import formreducer from "../Formreducer"
import storereducer from "../Storereducer";
const rootreducer=combineReducers({
    form:formreducer,
    store:storereducer
})




const Store=createStore(rootreducer);


export default Store;