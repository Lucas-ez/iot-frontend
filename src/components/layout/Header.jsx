import { Link } from 'react-router-dom';
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react'

function Header() {

  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
      <header>
          <Link to = "/iot-frontend/" className='link logo'>Internet of Things</Link>
          <div className='Nav'>
          <nav>
            <ul>
                <li><Link to = "/iot-frontend/" className='link'>Home</Link></li>
                <li><Link to = "/iot-frontend/asistentes" className='link'>Asistentes</Link></li>
                <li><Link to = "/iot-frontend/dispositivos" className='link'>Dispositivos</Link></li>
                <li><Link to = "/iot-frontend/novedades" className='link'>Novedades</Link></li>
                <li><Link to = "/iot-frontend/about" className='link'>About us</Link></li>
            </ul>
        </nav>
          </div>
          <div className='Mobile'>
            <div ref={navRef} className='Mobile-Nav'>
              <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
              </button>
              <nav>
                <ul>
                    <li onClick={showNavbar}><Link to = "/iot-frontend/" className='link'>Home</Link></li>
                    <li onClick={showNavbar}><Link to = "/iot-frontend/asistentes" className='link'>Asistentes</Link></li>
                    <li onClick={showNavbar}><Link to = "/iot-frontend/dispositivos" className='link'>Dispositivos</Link></li>
                    <li onClick={showNavbar}><Link to = "/iot-frontend/novedades" className='link'>Novedades</Link></li>
                    <li onClick={showNavbar}><Link to = "/iot-frontend/about" className='link'>About us</Link></li>
                </ul>
              </nav>
            </div>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
              <FaBars/>
            </button>
          </div>
      </header>
  );
}

export default Header;