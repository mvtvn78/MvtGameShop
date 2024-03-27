import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './componnet/Slider'
import OutProduct from './componnet/OutProduct'
import OurVision from './componnet/OurVision'
import FaPerson from './componnet/FaPerson'
import *  as imgs  from "./componnet/ImageManager"
// MainHomePage Initialization
function MainHomePage() {
  return (
    <Container className='main my-5'>
                    <Slider/>
                    <OutProduct heading="OUTSTANDING PRODUCTS"/>
                    <OurVision/>
                    <FaPerson  obj ={ {
                        heading: "FAMOUS PEOPLE",
                        img1 : imgs.hotStream1 ,
                        text1: "Streamer 123",
                        img2 : imgs.hotStream2 ,
                        text2: "Streamer 123",
                        img3: imgs.hotStream3 ,
                        text3: "Streamer 123",
                    }}/>
                    
    </Container>
  )
}
export default MainHomePage