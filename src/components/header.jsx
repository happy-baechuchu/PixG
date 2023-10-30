import '../styles/header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Link to="/">
            <div className="logo">PixG</div>
            </Link>
        </header>
    )
}

export default Header;