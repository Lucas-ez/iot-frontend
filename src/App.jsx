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
          <Route path="/" element={<Home/>} />
          <Route path='asistentes' element={<Asistentes/>}/>
          <Route path='dispositivos' element={<Dispositivos/>}/>
          <Route path='novedades' element={<Novedades/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
