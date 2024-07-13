import { useState } from "react"

function LudoBoard(){

    const [move, setMove] = useState({blue: 0, yellow: 0, green:0, white: 0})

    const addCountBlue =()=> {
        setMove((prevMove)=>{
           return {...prevMove, blue: prevMove.blue + 1}
        })
    };
    const addCountGreen =()=> {
        setMove((prevMove)=>{
           return {...prevMove, green: prevMove.green + 1}
        })
    };
    const addCountYellow =()=> {
        setMove((prevMove)=>{
           return {...prevMove, yellow: prevMove.yellow + 1}
        })
    };
    const addCountWhite =()=> {
        setMove((prevMove)=>{
           return {...prevMove, white: prevMove.white + 1}
        })
    };
     
    return(
        <>
        <div>  
            <h1>Ludo Button</h1>

            <p >count = {move.blue}</p>
            <button onClick={addCountBlue} style={{background:  "blue"}}>blue</button>
            
            <p>count ={move.green} </p>
            <button onClick={addCountGreen} style={{background:  "green"}}>green</button>

            <p>count = {move.yellow}</p>
            <button onClick={addCountYellow} style={{background:  "yellow", color: "black"}}>yellow</button>

            <p>count ={move.white} </p>
            <button   onClick={addCountWhite}style={{background:  "white", color: "black" }}>white {
                
            }</button>
        </div>
        </>
    )
}

export default LudoBoard