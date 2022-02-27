import React,{useState} from "react"
import HocComponent from "./Hoc"
function User(props){
 
    return(
        <>
        <h1>{props.data}</h1>
        <button onClick={props.change}>click</button>
        </>
    )
}
export default HocComponent(User) 