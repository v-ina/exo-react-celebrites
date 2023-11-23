import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

function RealLikePage(){

    // le cas on peut plus cliquer sur  5fois
    /* 
    const [likeCount, setLikeCount] = useState(0)
    const [message, setMessage] = useState(null)
    const clickHandle = () => {
        if(likeCount<5){
            setLikeCount(likeCount+1)
        } 
        if(likeCount ==5) {
            setMessage('vous avez deja clique 5fois')
        }
    }
    */


    // le cas on peut plus cliquer sur  5fois + bouton fermer + reinitialiser valeur a 0
    const [likeCount, setLikeCount] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)


    // quand il y a moins 5 fois de click, il passe bien setLikeCount(likeCount +1) fonction. il stocke le valeur +1 à variable 'likeCount', et recherge le composant.
    // si nombre de clique est passe 5 fois, on va appeler les autres fonctions.
    // ce sont setDisplayMessage() et setLikeCount()
    // par defaut, valeur de displayMessage a une valeur 'false' mais avec setDisplayMessage(true), il devient true. 
    // maintenant on a une div de P avec bouton fermer
    // et fonction setLikeCount(0) stock valeur 0 à variable 'likeCount', 'likeCount' est 0 maintenant 
    const clickHandle = () => {
        if(likeCount <5){
            setLikeCount(likeCount +1)
        } else {
            setDisplayMessage(true)
            setLikeCount(0)     // reinitialiser valeur de likeCount
        }
    }

    const closeHandle =() =>{
        setDisplayMessage(false)
    }

    return(
        <>
            <Header />
            <main>
                {displayMessage && 
                    <div>
                        <p>Vous ne pouvez pas liker plus de 5 fois</p>
                        <button onClick={closeHandle}>fermer le message</button>
                    </div>
                }
                <button onClick={clickHandle} disabled={displayMessage ? true : false}>Like</button>
                <p>liked : {likeCount} fois</p>
                {/* <p>{message}</p> */}
            </main>
            <Footer />
        </>
    )
}

export default RealLikePage