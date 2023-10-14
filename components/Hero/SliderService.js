import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SliderService = () => {
    const images = [
       {mobile:"https://res.cloudinary.com/dh9etf988/image/upload/v1697256601/creatiendaya/creamos_tu_tienda_online_shopify_1_y68yj6.png",
    desktop:"https://res.cloudinary.com/dh9etf988/image/upload/v1697246592/creatiendaya/dise%C3%B1amos_y_creamos_tu_tienda_online_shopify_ex5hrc.png"} ,
    {
        mobile: "https://res.cloudinary.com/dh9etf988/image/upload/v1697247776/creatiendaya/tienda_ii_1_msx4fv.png",
        desktop: "https://res.cloudinary.com/dh9etf988/image/upload/v1697247776/creatiendaya/tienda_ii_1_msx4fv.png"
    }
       
      
    ];
  return (
    <Zoom  autoplay={true} scale={1.4} arrows={true} infinite={true} indicators={true}>
    {images.map((each, index) => (
        <div>
            {/* Mobile */}
        <div className='d-block d-lg-none' key={index} style={{ width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%",height:"550px" }} alt="Creamos y mejoramos tienda online shopify" src={each.mobile} />
        </div>
        {/* Desktop */}
         <div className='d-none d-lg-block' key={index} style={{ width: "100%" }}>
         <img style={{ objectFit: "cover", width: "100%",height:"650px" }} alt="Creamos y mejoramos tienda online shopify" src={each.desktop} />
     </div>
     </div>
    ))}
</Zoom>
  )
}

export default SliderService