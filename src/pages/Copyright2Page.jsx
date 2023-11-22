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

            </main>
            <Footer />
        </>
    )
}

export default CopyrightPage2