import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reveal from './componnet/Reveal';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import FaPerson  from './componnet/FaPerson'
import "./css/MainAboutPage.scss"
import * as imgs from "./componnet/ImageManager"
function MainAboutPage() {

  return (
    <Container>
            <Row className='about_us mt-5'>
                <Col xs={6} className='d-flex flex-column justify-content-center align-items-center' >
                  <Reveal index_Delay={0.3}>
                    <h1 >TEXT HEADING</h1>
                  </Reveal>
                </Col>
                <Col xs={6} className='mt-3' >
                  <Reveal index_Delay={0.4}>
                    <Image src={imgs.imgAbout}   /> </Reveal>
                  <Reveal index_Delay={0.5}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                       Corporis nemo aliquid ad vero accusamus nisi deleniti, eveniet, 
                       pariatur perspiciatis a ipsum ipsa! Tenetur dignissimos quasi suscipit vitae eos officia, 
                       sed nam quas sint! Nulla cumque reprehenderit nemo odit, distinctio assumenda harum eum quaerat ad quidem, 
                       excepturi unde dicta atque placeat exercitationem rem? Id, tempora?</p>
                  </Reveal>
                </Col>    
            </Row>
            <FaPerson
              obj ={ {
                heading: "TOP LEADER",
                img1 : imgs.Leader1 ,
                text1: "Leader 123",
                img2 : imgs.Leader3 ,
                text2: "Leader 123",
                img3: imgs.Leader2 ,
                text3: "Leader 123",
          }}/>
    </Container>
  )
}
export default MainAboutPage
