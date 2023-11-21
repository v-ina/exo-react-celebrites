import './EveryStarsPage.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { stars } from '../utils/utils'
import CelebrityCard from '../components/CelebrityCard'

function EveryStarsPage (){
    return(
        <>
            <Header/>
            <main>
                {stars.map(star=>{
                    return <CelebrityCard star={star}/>
                })}
            </main>
            <Footer/>
        </>
    )
}

export default EveryStarsPage