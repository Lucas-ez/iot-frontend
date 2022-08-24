import { Link } from 'react-router-dom';
import './header.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to = "/" className='link'>Home</Link></li>
                <li><Link to = "/asistentes" className='link'>Asistentes</Link></li>
                <li><Link to = "/dispositivos" className='link'>Dispositivos</Link></li>
                <li><Link to = "/novedades" className='link'>Novedades</Link></li>
                <li><Link to = "/about" className='link'>About us</Link></li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <header>
            <Link to = "/" className='link logo'>Internet of Things</Link>
            <Nav />
        </header>
    );
}

export default Header;