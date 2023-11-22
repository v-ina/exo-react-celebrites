import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

function CopyrightPage2(){

    const [textAtInput, setTextAtInput] = useState("")
    const textChange =(event) =>{
        setTextAtInput(event.target.value)
    }

    return(
        <>
            <Header />
            <main>
                <form action="">
                    <input onChange={textChange} type="text" />
                    <p>your input here : {textAtInput}</p>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default CopyrightPage2