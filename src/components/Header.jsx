import './Header.scss'
import { Link } from 'react-router-dom'

function Header (){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/stars'>Everystars</Link></li>
                <li><Link to='/random'>random stars</Link></li>
            </ul>
        </nav>
    )
}

export default Header