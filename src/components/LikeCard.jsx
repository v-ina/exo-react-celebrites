import { useState } from "react"

function LikeCard (){

    const [text, setTextToDisplay] = useState(0)
    const addLike = () =>{
        setTextToDisplay(text+1)
    }

    return(
        <>
            <button onClick={addLike}>Like</button>
            <p>liked : {text} fois</p>
        </>
    )
}

export default LikeCard