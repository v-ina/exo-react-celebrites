import './HomePage.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CelebrityCard from '../components/CelebrityCard'
import { stars } from '../utils/utils'

function HomePage (){

    const sortByPublisheDate = stars.sort((date1,date2)=>{
        return new Date(date1.publishedAt) - new Date(date2.publishedAt)
    })
    const newest5Publishedstar = sortByPublisheDate.slice(-5)
    const choosedstars = stars.filter(star=>{
        return star.isPickedByTeam
    })

    return(
        <>
            <Header currentPage={"HomePage"}/>
            <main>
                <h2>Latest 5 stars</h2>
                {newest5Publishedstar.map(star=>{
                    return <CelebrityCard star={star}/>
                })} 
                <h2>picked 3 stars</h2>
                {choosedstars.map(star=>{
                    return <CelebrityCard star={star}/>
                })}
            </main>
            <Footer/>
        </>
    )
}

export default HomePage