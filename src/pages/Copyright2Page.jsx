import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

function CopyrightPage2(){

    // je cree une variable qui s'apelle textAtInput, et cet variable avoir le valeur "a" par defaut
    // et le fonction setTextAtInput va changer valeur de textAtInput et recharger mon composant.
    // valeur qui va stocker, c'est event.target.value (c'est ce qu'il est dans le champs de input)

    const [textAtInput, setTextAtInput] = useState("a")
    const textChange =(event) =>{
        setTextAtInput(event.target.value)
    }

    const [colorAtInput, setColorAtInput] = useState('black')
    const colorChange = (event) => {
        setColorAtInput(event.target.value)
    }

    const [rangeAtInput , setRangeAtInput] = useState('')
    const rangeChange = (event) => {
        setRangeAtInput(event.target.value)
    }

    const [likenumber, setLikeNumber] = useState(0)
    const clickButton=()=>{
        setLikeNumber(likenumber +1)
    }

    // 3. je stocke valeur de likenumber avec useState, likenumber a '0' pour le valeur par defaut
    // 4. fonction clickButton, j'appelle une fonction setLikeNumber. cette fonction 1)stock valeur a variable 'likenumber' et il recherge le composant
    // 5. chaque click, on va stocker le valeur (likenumber +1) pour qu'il soit augementer 1 par click. 

    return(
        <>
            <Header />
            <main>
                <form style={{color:`${colorAtInput}`}} action="">
                    <h2>text input</h2>
                    <input onChange={textChange} type="text" />
                    <p>your input here : {textAtInput}</p>
                    {/* mon <p> changera chaque fois quand le valeurs de textAtInput est change.
                    quand j'ecris quelque chose dans le champs, ca rappelle fonction {texthange} 
                    et cette fontion rappelle function setTextAtInput.*/}

                    <h2>color input</h2>
                    <div style={{ backgroundColor: `${colorAtInput}`, height:"100px", width:"100px"}}> </div>
                    <input type="color" onChange={colorChange}/>

                    <h2>range input</h2>
                    <input type="range" onChange={rangeChange} />
                    <p>{rangeAtInput}</p>
                </form>

                <button onClick={clickButton}>button</button>
                <p>like {likenumber} fois</p>
                    {/* 1. j'ai creé un bouton et lui donné onClick function */}
                    {/* 2. j'ai creé balise P, et je vais utiliser mon variable {likenumber} */}
                    
            </main>
            <Footer />
        </>
    )
}

export default CopyrightPage2