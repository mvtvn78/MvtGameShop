import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { NotFound} from './componnet/ImageManager';
import "./css/NotFoundPage.scss"
function NotFoundPage() {
  return (
    <Container className='notfound'>
    <Row>
    <Col  xs={6}>
       <h1 className="text_white text-warning my-5">NOT FOUND 404</h1>
       <p className='text_not_outstading'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A adipisci corrupti similique eveniet harum obcaecati rem odit praesentium facilis repudiandae nihil, 
        illum aliquam magni quibusdam! Nesciunt illum tempore optio, natus voluptatum deleniti est adipisci rem corporis cum ipsam nobis pariatur quibusdam?
       </p>
      </Col>
      <Col xs={6} >
        <Image src={NotFound}  />
      </Col>
    </Row>
  </Container>
  )
}
export default  NotFoundPage
