import React from 'react'
import "./novedad.css"

export default function Novedad({titulo, cuerpo, fuente}) {
  return (
    <div className='Novedad'>
        <h2>{titulo}</h2>
        <div className='cuerpo' dangerouslySetInnerHTML={{__html: cuerpo}}/>
        <p className='fuente'>
            <span>Fuente: </span>
            <a href={fuente}>{fuente}</a>
        </p>
    </div>
  )
}
