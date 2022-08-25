import { useState, useEffect } from "react"
import axios from "axios"
import { Title, Subtitle } from "../../components/Titles"

import "./dispositivos.css"

function Dispositivos() {

    const [bigBox, setBigBox] = useState({id:0})
    const [dispositivos, setDispositivos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getDispositivos = async () => {
        setLoading(true)
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/dispositivos`)

        setDispositivos(response.data)
        setLoading(false)
        }

        getDispositivos()

    }, []);

    const handleClick = (e) => {
        setBigBox([...dispositivos].filter(dispositivo => dispositivo.nombre === e.target.alt)[0])
    }

    return (
        <div className="Dispositivos" id={"info"}>
            <Title txt={"Dispositivos"}/>
            <div className="bigBox" 
                style={{display:(bigBox.id === 0?"none":"flex")}}>
                <img src={bigBox.imagen} alt={bigBox.nombre} />
                <div>
                    <Subtitle txt={bigBox.nombre} />
                    <p style={
                    {   
                        paddingTop: "2rem",
                        fontSize: "2vw",
                    }
                    }>{bigBox.descripcion}</p>
                </div>
            </div>
            <div className="grid">
                {loading ? 
                    <Subtitle txt={"Cargando..."} />:
                    dispositivos.map((dispositivo) => (
                        <a href={"#info"} key={dispositivo.id} className="imgBox">
                                <img src={dispositivo.imagen} alt={dispositivo.nombre} onClick={handleClick}/>
                            </a>)
                    )
                }
            </div>
        </div>
    )
}


export default Dispositivos;