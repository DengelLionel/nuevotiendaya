import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SliderService = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
  return (
    <Zoom  autoplay={true} scale={1.4} arrows={false} infinite={true} indicators={true}>
    {images.map((each, index) => (
        <div>
            {/* Mobile */}
        <div className='d-block d-lg-none' key={index} style={{ width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%",height:"550px" }} alt="Slide Image" src={each} />
        </div>
        {/* Desktop */}
         <div className='d-none d-lg-block' key={index} style={{ width: "100%" }}>
         <img style={{ objectFit: "cover", width: "100%",height:"650px" }} alt="Slide Image" src={each} />
     </div>
     </div>
    ))}
</Zoom>
  )
}

export default SliderService