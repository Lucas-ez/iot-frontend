import { Link } from 'react-router-dom';
import './header.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to = "/iot-frontend/" className='link'>Home</Link></li>
                <li><Link to = "/iot-frontend/asistentes" className='link'>Asistentes</Link></li>
                <li><Link to = "/iot-frontend/dispositivos" className='link'>Dispositivos</Link></li>
                <li><Link to = "/iot-frontend/novedades" className='link'>Novedades</Link></li>
                <li><Link to = "/iot-frontend/about" className='link'>About us</Link></li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <header>
            <Link to = "/iot-frontend/" className='link logo'>Internet of Things</Link>
            <Nav />
        </header>
    );
}

export default Header;