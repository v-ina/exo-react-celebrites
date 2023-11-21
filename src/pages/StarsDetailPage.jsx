import './StarsDetailPage.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { stars } from '../utils/utils'
// import CelebrityCard from '../components/CelebrityCard'

function StarsDetailPage (){

    const {starID} = useParams() 
    const stardetail = stars.find(star=>{
        return starID == star.id
    })

    // {starID} c'est ce que j'ai marque pour url. a App.js
    // par exemple, si je clique 2eme element de tableau stars, 
    // fonction useParams recuperera '2', et ca va devenir {starID}
    // je cree un object(stardetail) qui contient les infos de 2eme element de tableau stars.
    // et cet objet stardetail, je vais creer une article.

    return(
        <>
            <Header/>
            <main>
                {/* {<CelebrityCard star={stardetail}/>} */}
                {/* dans cette page, on a pas besoin de re-utiliser notre composant Celebrtycard, parce que deja, on a plus besoin de Link,
                et cette page est cence voir tout les infos de stars. donc ici, on cree normalement */}

                <article className='celebritycard--article'>
                    <h3>{stardetail.name}</h3>
                    <img src={stardetail.img} alt={stardetail.name} />
                    <p>{stardetail.bio}</p>
                    <p>{stardetail.publishedAt}</p>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default StarsDetailPage