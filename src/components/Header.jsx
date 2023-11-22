import './Header.scss'
import { Link } from 'react-router-dom'

function Header ({currentPage}){
    return(
        <nav>
            <ul>
                {currentPage == "HomePage" ? (
                    <li><Link to='/'><strong>Home</strong></Link></li>
                ):(
                    <li><Link to='/'>Home</Link></li>
                )}

                {currentPage == "EveryStarsPage" ?(
                    <li><Link to='/stars'><strong>Everystars</strong></Link></li>
                ):(
                    <li><Link to='/stars'>Everystars</Link></li>
                )}

                {currentPage == "RandomStarPage" ?(
                    <li><Link to='/random'><strong>random stars</strong></Link></li>
                ):(
                    <li><Link to='/random'>random stars</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Header