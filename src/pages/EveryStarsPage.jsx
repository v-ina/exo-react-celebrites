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

// ici, je vais utiliser mon fonction qui va creer CelebrityCard, mais en remplissant
// star(chaque element qui boucle dans un tableau stars.) a la place de {star} de fonction CelebrityCard

export default EveryStarsPage