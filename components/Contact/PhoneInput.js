import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { isValidPhoneNumber } from 'libphonenumber-js'

const countryCodes = [
    { value: '51', label: 'Peru (+51)' },
    { value: '1', label: 'USA (+1)' },
    { value: '54', label: 'Argentina (+54)' },
    { value: '55', label: 'Brasil (+55)' },
    { value: '56', label: 'Chile (+56)' },
    { value: '57', label: 'Colombia (+57)' },
    { value: '593', label: 'Ecuador (+593)' },
    { value: '52', label: 'México (+52)' },
    { value: '58', label: 'Venezuela (+58)' },
    { value: '49', label: 'Alemania (+49)' },
    { value: '34', label: 'España (+34)' },
    { value: '33', label: 'Francia (+33)' },
    { value: '39', label: 'Italia (+39)' },
    { value: '44', label: 'Reino Unido (+44)' },
    { value: '41', label: 'Suiza (+41)' },
    { value: '46', label: 'Suecia (+46)' },
    { value: '351', label: 'Portugal (+351)' },
]

const PhoneInput = ({ setPhone, error, setError,setPais }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        if (selectedCountry) {
            let completePhoneNumber = `+${selectedCountry?.value}${userInput}`
            if (
                /^\d+$/.test(userInput) &&
                isValidPhoneNumber(completePhoneNumber)
            ) {
                setError(null)
                setPhone(completePhoneNumber)
                setPais(selectedCountry&&selectedCountry.label)
            } else if (userInput !== '') {
                setError('El número de teléfono no es válido.')
            }
        }
    }, [userInput, selectedCountry])

    const handlePhoneChange = e => {
        setUserInput(e.target.value)
    }

    return (
        <div>
            <label className='mb-2'>Seleccione su país</label>
        <Select
                instanceId="your-unique-id"
                options={countryCodes}
                value={selectedCountry}
                onChange={setSelectedCountry}
                className="mb-2"
            />
        <input
            className="form-control mb-2"
            type="text"
            value={userInput}
            onChange={handlePhoneChange}
            placeholder="Número de celular"
        />
        {error && (
            <p className="text-danger text-sm italic mt-2">{error}</p>
        )}
    </div>
    
    )
}

export default PhoneInput
