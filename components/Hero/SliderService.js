import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SliderService = () => {
    const images = [
        "https://res.cloudinary.com/dh9etf988/image/upload/v1697176533/creatiendaya/tu-tienda-online-shopify-diseno-personalizado-diferente-autentico_zknhwc.png",
        "https://res.cloudinary.com/dh9etf988/image/upload/v1697176546/creatiendaya/tienda_ii_bpqzom.png",
      
    ];
  return (
    <Zoom  autoplay={true} scale={1.4} arrows={true} infinite={true} indicators={true}>
    {images.map((each, index) => (
        <div>
            {/* Mobile */}
        <div className='d-block d-lg-none' key={index} style={{ width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%",height:"550px" }} alt="Creamos y mejoramos tienda online shopify" src={each} />
        </div>
        {/* Desktop */}
         <div className='d-none d-lg-block' key={index} style={{ width: "100%" }}>
         <img style={{ objectFit: "cover", width: "100%",height:"650px" }} alt="Creamos y mejoramos tienda online shopify" src={each} />
     </div>
     </div>
    ))}
</Zoom>
  )
}

export default SliderService