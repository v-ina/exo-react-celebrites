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
