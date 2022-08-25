import { Link } from 'react-router-dom';
import './header.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to = "/iot/home" className='link'>Home</Link></li>
                <li><Link to = "/iot/asistentes" className='link'>Asistentes</Link></li>
                <li><Link to = "/iot/dispositivos" className='link'>Dispositivos</Link></li>
                <li><Link to = "/iot/novedades" className='link'>Novedades</Link></li>
                <li><Link to = "/iot/about" className='link'>About us</Link></li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <header>
            <Link to = "/iot/home" className='link logo'>Internet of Things</Link>
            <Nav />
        </header>
    );
}

export default Header;