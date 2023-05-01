import { Container } from '@mantine/core';
import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css"



const MapContainer = () => {
  useEffect(()=>{

Aos.init({duration :2000})

  },[])
  return (
    <div data-Aos="zoom-in">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.509345642622!2d77.3627027!3d28.6109546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d054809ac1cc3%3A0xf081c1e27610b8f2!2sTriline%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681908047205!5m2!1sen!2sin" width="100%" height="450" style={{border:"0",}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Container size="90%">
      
      </Container>
     
    </div>
  );
};

export default MapContainer;
