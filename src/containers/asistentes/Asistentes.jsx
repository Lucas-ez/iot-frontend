import googleImg from "../../img/asistentes/googlehome.png"
import amazonImg from "../../img/asistentes/amazonecho.png"
import appleImg from "../../img/asistentes/applehomepod.png"

import {Subtitle, Title} from "../../components/Titles"

const asistentes = [
    {
        img: googleImg,
        nombreImg: "Google Home",
        titulo: "Google Assistant",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe dolor facilis cumque, nisi, debitis iusto officia neque sed accusamus possimus nesciunt eveniet excepturi dolores quidem harum laboriosam quaerat autem."
    },
    {
        img: amazonImg,
        nombreImg: "Amazon Echo",
        titulo: "Alexa",
        descripcion: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe dolor facilis cumque, nisi, debitis iusto officia neque sed accusamus possimus nesciunt eveniet excepturi dolores quidem harum laboriosam quaerat autem."
    },
    {
        img: appleImg,
        nombreImg: "Apple HomePod",
        titulo: "Siri",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe dolor facilis cumque, nisi, debitis iusto officia neque sed accusamus possimus nesciunt eveniet excepturi dolores quidem harum laboriosam quaerat autem."
    }
]

const Asistente = (args) => {

    const index = args.props.index
    const { img, nombreImg, titulo, descripcion } = args.props.asistente

    return (
        <div className="Asistentes" style={
            {   
                paddingInline: '10%',
                display: "flex",
                alignItems: "center",
                gap: "1.5em",
                marginBottom: (index%2 === 1)?"2em":"6em",
                flexDirection: (index%2 === 1)?"row-reverse":"row",
            }
        }>
            <img src={img} alt={nombreImg} style={
                {
                    display: "block",
                    width: "35%",
                }
            }/>
            <div>
                <Subtitle txt={titulo} />
                <p style={
                    {   
                        paddingTop: "2rem",
                        fontSize: "2vw",
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
                    fontSize: "2em",
                    textAlign: "left",
                }
            }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis saepe dolor facilis cumque, nisi, debitis iusto officia neque sed accusamus possimus nesciunt eveniet excepturi dolores quidem harum laboriosam quaerat autem.
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