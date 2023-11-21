import Header from '../components/Header'
import Footer from '../components/Footer'
import { stars } from '../utils/utils'
import CelebrityCard from '../components/CelebrityCard'

function RandomStarPage(){

    const randomstar = stars[(Math.random()*(stars.length-1)).toFixed()]

    console.log((Math.random()*(stars.length-1)).toFixed(0));
    return(
        <>
            <Header/>
            <main>
                {<CelebrityCard star={randomstar}/>}
            </main>
            <Footer/>
        </>
    )
}

export default RandomStarPage