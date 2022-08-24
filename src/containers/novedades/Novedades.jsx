import './novedades.css'
import { Title } from './../../components/Titles'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Novedad from './../../components/novedades/Novedad'

function Novedades() {

  const [novedades, setNovedades] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getNovedades = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/novedades')

      setNovedades(response.data)
      setLoading(false)
    }

    getNovedades()

  }, []);

  return (
    <div className='Novedades'>
      <Title txt="Novedades"/>
      <div className='Novedades__container'>
      {loading ? 
        <div>Cargando...</div> :
        novedades.map(novedad => (
          <Novedad key={novedad.id} cuerpo={novedad.cuerpo} titulo={novedad.titulo} fuente={novedad.fuente}/>
          ))
        }
      </div>
    </div>
  )
}

export default Novedades