import './novedades.css'
import { Title, Subtitle } from './../../components/Titles'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Novedad from './../../components/novedades/Novedad'

function Novedades() {

  const [novedades, setNovedades] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getNovedades = async () => {
      setLoading(true)
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`)

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
        <Subtitle txt={"Cargando..."} /> :
        novedades.map(novedad => (
          <Novedad key={novedad.id} cuerpo={novedad.cuerpo} titulo={novedad.titulo} fuente={novedad.fuente}/>
          ))
        }
      </div>
    </div>
  )
}

export default Novedades