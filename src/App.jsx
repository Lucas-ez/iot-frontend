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
          <Route path="iot/home" element={<Home/>} />
          <Route path='iot/asistentes' element={<Asistentes/>}/>
          <Route path='iot/dispositivos' element={<Dispositivos/>}/>
          <Route path='iot/novedades' element={<Novedades/>}/>
          <Route path='iot/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
