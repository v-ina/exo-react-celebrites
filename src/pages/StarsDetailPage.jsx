import './StarsDetailPage.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { stars } from '../utils/utils'
import CelebrityCard from '../components/CelebrityCard'

function StarsDetailPage (){

    const {starID} = useParams() 
    const stardetail = stars.find(star=>{
        return starID == star.id
    })

    return(
        <>
            <Header/>
            <main>
                {<CelebrityCard star={stardetail}/>}
            </main>
            <Footer/>
        </>
    )
}

export default StarsDetailPage