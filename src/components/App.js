//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React,{useEffect, useState} from "react";

import './../styles/App.css';


const App=()=>{
    const[text,setText]=useState("");

   useEffect(()=>{

    console.log(text);
   },[])

    return (
        <div className="markdown">

             <input type="text" onChange={(e)=>setText(e.target.value)}></input>
            <div><h1>{text}</h1></div>
        </div>
    )
}
export default App;
