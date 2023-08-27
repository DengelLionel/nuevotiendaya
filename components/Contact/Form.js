import { useState,useEffect } from "react"
import PhoneInput from "./PhoneInput"
import RadioButtons from "./RadioButtons"
import axios from "../../lib/axios"
export default function Form() {
	const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [pais, setPais] = useState('')
    const [necesito, setNecesito] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [errorNombre, setErrorNombre] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    const [errorTelefono, setErrorTelefono] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const handleEnviarContacto = async event => {
        event.preventDefault()
        setEnviando(true)
        if (!nombre.trim()) {
            setErrorNombre('Por favor, ingrese su nombre.')
            setEnviando(false)
            return
        } else setErrorNombre('')

        if (!email.trim()) {
            setErrorEmail('Por favor, ingrese su correo electrónico.')
            setEnviando(false)
            return
        } else setErrorEmail('')

        if (!telefono.trim()) {
            setErrorTelefono('Por favor, ingrese su número de teléfono.')
            setEnviando(false)
            return
        } else setErrorTelefono('')

       
     try {
            await csrf()
            const contactame = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                pais: pais,
                necesito:selectedOption
            }
            await axios.post('/api/contactame', contactame)
            setEnviado(true)
            setNombre('')
            setEmail('')
            setTelefono('')
        } catch (error) {
            setErrorserv(error)
        } finally {
            setEnviando(false)
        } 
    }

    useEffect(() => {}, [errorserv])

	return (
		<form  onSubmit={handleEnviarContacto} className="contact-form row">
			<div className="col-12">
				<input type="text"    value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Francisco Name"/>
						  {errorNombre && (
                        <p className="text-danger text-sm italic mt-2">
                            {errorNombre}
                        </p>
                    )}
			</div>
			<div className="col-12">
				<input type="email"  value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="john@example.com" />
						  {errorEmail && (
                        <p className="text-danger text-sm italic mt-2">
                            {errorEmail}
                        </p>
                    )}
			</div>
			<div className="col-12"  style={{ zIndex: 2 }}>
			<PhoneInput
                        setPhone={setTelefono}
                        setPais={setPais}
                        error={errorTelefono}
                        setError={setErrorTelefono}
                    />
			</div>
			
		<RadioButtons selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
			<div className="col-12">
				<button className="theme-btn" type="submit">
					Solicitar llamada
				</button>
                {enviado && (
  <div className="alert alert-success mt-3">
    <p className="text-center ">¡Se envió correctamente! Pronto nos comunicaremos con usted.</p>
  </div>
)}

			</div>
		</form>
	);
}
