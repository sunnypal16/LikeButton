import { useState, useTransition } from "react"
function LikeButton(){
    const [click, setClick] = useState(false)

    let like=()=>{
        setClick(!click)
    }
    let sunny = {color :"green"}

    return(
        <>

        <dir>
            <h2>I Am creating a Like button</h2> 
            <h1 onClick={like}> { click ? <i class="fa-solid fa-thumbs-up" style={{color: "red"}}></i> :  <i class="fa-regular fa-thumbs-up" style={sunny}></i>}</h1>

        </dir>
        </>
    )
}

export default LikeButton