import { useState } from "react";
function RadioButtons({selectedOption, setSelectedOption}) {
   
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className="col-12 d-flex"  style={{ zIndex: 1 }}>
        <div className="row-12">
        <h5>Necesito</h5>
        <div className="btn-group " role="group">
  <div className="row d-flex justify-content-center align-items-center">
    <div className="col-12 p-3  col-lg-4">
      <input
        type="radio"
        className="btn-check w-100"
        id="cotizarServicio"
        autoComplete="off"
        value="cotizar"
        checked={selectedOption === 'cotizar'}
        onChange={handleOptionChange}
      />
      <label className="btn btn-outline-primary" htmlFor="cotizarServicio">
        Cotizar un servicio
      </label>
    </div>

    <div className="col-12 p-3  col-lg-4">
      <input
        type="radio"
        className="btn-check"
        id="soporteMantenimiento"
        autoComplete="off"
        value="soporte"
        checked={selectedOption === 'soporte'}
        onChange={handleOptionChange}
      />
      <label className="btn btn-outline-primary" htmlFor="soporteMantenimiento">
        Soporte / Mantenimiento
      </label>
    </div>

    <div className="col-12 p-3  col-lg-4">
      <input
        type="radio"
        className="btn-check"
        id="asesor"
        autoComplete="off"
        value="asesor"
        checked={selectedOption === 'asesor'}
        onChange={handleOptionChange}
      />
      <label className="btn btn-outline-primary" htmlFor="asesor">
        Comunicarme con un asesor
      </label>
    </div>
  </div>
</div>

        </div>
       
      
      </div>
    );
  }
  
  export default RadioButtons;
  