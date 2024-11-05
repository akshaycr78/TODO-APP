import { useNavigate } from "react-router-dom"
import "./Main.css"

export default function Main(){
    const navi=useNavigate()
    return(
        <div className="m1">
            <div className="m2">
            <p><h1>WELCOME TO TODO APP</h1></p>
            
            <button id="mbtn" onClick={()=>navi("/todo")}>CONTINUE</button>
            
            </div>
        </div>
    )
}