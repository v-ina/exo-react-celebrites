import { useState } from "react";

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

    return(
        <>
            <button onClick={cacherLeTexte}>Cacher le texte</button>
            {displayText && <p>blablalbal</p>}
        </>
    )
}

export default CopyrightPage