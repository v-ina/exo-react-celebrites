import Header from '../components/Header'
import Footer from '../components/Footer'

function Cocktail(){


    // on va recuperer API par ce lien
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    // attend jusuqu'a fonction fetch() finit son travail(qu'il recupere)
    // et apres, on vas changer cette donnee à json
    .then((response)=>{
        return response.json()
    })
    .then((json)=>{
        console.log(json);
    })

    return(
        <>
            <Header />
            <Footer />
        </>
    )
}

export default Cocktail