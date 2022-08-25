import { Title, Subtitle } from '../../components/Titles';
import img from '../../img/portrait.png';
import "./about.css";
import axios from 'axios'
import { useState } from 'react'

function About() {

    const initialForm = {
        nombre: '',
        mail: '',
        asunto: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState(initialForm)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name] : value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <div>
            <div className='info'>
                <img src={img} alt="retrato" className='retrato'/>
                <div>
                    <Subtitle txt={"Nombre Apellido"} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eum tempore! Ex soluta incidunt est vitae voluptatibus iste dolores autem nam hic dicta. Atque facere enim optio placeat quia corporis.</p>
                </div>
            </div>
            <div className='contacto'>
                <Title txt={"Contacto"}/>
                <form className='formulario' action='/contacto' method='post' onSubmit={handleSubmit}>
                    <div className='tres-input'>
                        <input className='input campo' name="nombre" value={formData.nombre} onChange={handleChange} type="text" placeholder='Nombre' required/>
                        <input className='input campo' name="mail" value={formData.mail} onChange={handleChange} type="email" placeholder='Email' required/>
                        <input className='input campo' name="asunto" value={formData.asunto} onChange={handleChange} type="text" placeholder='Asunto' required/>
                    </div>
                    <div className='text-area'>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder='Mensaje' className='text-area campo' required/>
                    </div>
                    <button className='button campo' type='submit'>Enviar</button>
                    {sending ? <Subtitle txt={"Enviando..."}/> : null}
                    {msg ? <Subtitle txt={msg}/> : null}
                </form>
            </div>
        </div>
    )
}

export default About;