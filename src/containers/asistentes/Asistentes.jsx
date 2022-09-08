import googleImg from "../../img/asistentes/googlehome.png"
import amazonImg from "../../img/asistentes/amazonecho.png"
import appleImg from "../../img/asistentes/applehomepod.png"

import {Subtitle, Title} from "../../components/Titles"
import './asistentes.css'

const asistentes = [
    {
        img: googleImg,
        nombreImg: "Google Home",
        titulo: "Google Assistant",
        descripcion: "Es el asistente virtual desarrollado con una inteligencia artificial de Google, con él se pueden controlar, a través de la voz, todos los dispositivos conectados al hogar. Puede conectarse al smarphone a traves de app disponible en iOS y Android."
    },
    {
        img: amazonImg,
        nombreImg: "Amazon Echo",
        titulo: "Alexa",
        descripcion: "Es el asistente de voz de Amazon puede encontrarse en los altavoces inteligentes Amazon Echo, en otros altavoces inteligentes donde también está integrado y en la aplicación móvil. Existen más de 28.000 dispositivos compatibles con Alexa."
    },
    {
        img: appleImg,
        nombreImg: "Apple HomePod",
        titulo: "Siri",
        descripcion: "Siri fue el primer gran asistente de voz en ser lanzado, es el asistente digital de Apple y solo esta disponible para los dispositivos de esta marca por lo q tiene un uso más limitado que otros asistentes."
    }
]

const Asistente = (args) => {

    const { img, nombreImg, titulo, descripcion } = args.props.asistente

    return (
        <div className="Asistente">
            <img src={img} alt={nombreImg}/>
            <div>
                <Subtitle txt={titulo} />
                <p style={
                    {   
                        paddingTop: "2rem",
                        fontSize: "1rem",
                    }
                }>{descripcion}</p>
            </div>
        </div>
    )
}

function Asistentes() {
    return (
        <main>
            <Title txt="Asistentes de voz" />
            <p style={
                {
                    paddingInline: '10%',
                    paddingBottom: '8rem',
                    fontSize: "1.8rem",
                    textAlign: "left",
                }
            }>
                A través de una inteligencia artificial son capaces de reconocer el lenguaje y responder a comandos de voz para realizar tareas e interactuar con otros dispositivos. Se puede acceder a ellos a traves de un smarphone o un dispositivo específico como los siguientes.
            </p>
            {
                asistentes.map((asistente, index) => (
                    <Asistente key={asistente.nombreImg} props = {{asistente, index}} />
                ))
            }
        </main>
    )
}

export default Asistentes;