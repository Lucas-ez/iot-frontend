import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';

import { Home, Asistentes, Dispositivos, Novedades, About } from './containers'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="iot-frontend" element={<Home/>} />
          <Route path='iot-frontend/asistentes' element={<Asistentes/>}/>
          <Route path='iot-frontend/dispositivos' element={<Dispositivos/>}/>
          <Route path='iot-frontend/novedades' element={<Novedades/>}/>
          <Route path='iot-frontend/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
