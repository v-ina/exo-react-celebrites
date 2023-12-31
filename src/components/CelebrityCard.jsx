import './CelebrityCard.scss'
import { Link } from 'react-router-dom'

function CelebrityCard ({star}){
    return(
        <article className='celebritycard--article'>
            <h3>{star.name}</h3>
            <Link to={`/stars/${star.id}/detail`}><img src={star.img} alt={star.name} /></Link>
            <p>{star.bio}</p>
            <p>{star.publishedAt}</p>
        </article>
    )
}
export default CelebrityCard

// j'ai cree ici mon fonction pour creer un composant de CelebrtyCard. 
// et je vais utiliser ce composant a la page d'accueil et page EveryStars.
// j'ai cree un parametre qui s'appelle {star}
// par props, donc par {star}, chaque composant parent va remplir cette props
