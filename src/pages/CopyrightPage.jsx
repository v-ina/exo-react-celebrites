import { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'


function CopyrightPage(){

    // let displayText = true  => on declare pas variable comme ca, comme javascript
    // ici, c'est comme on declare une variable, qui a une valeur d'entre () de useState (donc, ici valeur est 'true')
    // et fonction setDisplayText permet a stocker le valeur par le parametre, et il recharge le composant.
    // chaque fois qu'on click, parametre(!displayText) va devenir valeur de displayText.
    // donc mon <p> afficher / masquer par le valeur de displayText

    const [displayText , setDIsplayText] = useState(true)
    const cacherLeTexte =()=>{
        setDIsplayText(!displayText)
    }
    console.log(displayText);

    // const setDisplayText =() =>{
    //     displayText = true
    //     + bouton d'actualisation
    // }
    // oui c'est ca en gros.


    const [number , setNumber] = useState(0)
    const increaseNumber =()=>{
        if (number <10){

            setNumber(number+1)
        }
    }


    const [message, setMessage] = useState("")
    const changevalue=(event)=>{
        // const messageValue = event.target.value
        // setMessage(messageValue)
        // => en une ligne
        setMessage(event.target.value)
    }

    return(
        <>
            <Header />
            <button onClick={cacherLeTexte}>button</button>
            {displayText && <p>blalbalbla</p>}

            <button onClick={increaseNumber}>increase</button>
            <p>{number}</p>

            <form action="">
                <input type="text" onChange={changevalue}/>
                <p>change here : {message}</p>
            </form>
            <Footer />
        </>
    )
}

export default CopyrightPage