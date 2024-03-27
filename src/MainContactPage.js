import React, { useRef, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container ,Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Reveal from './componnet/Reveal';
import Alert from './componnet/Alert';
import "./css/MainContactPage.scss"
function MainContactPage() {
  const [modalShow, setModalShow] = React.useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [comment,setComment]=useState("");
  let alerter = useRef(null)
  const handleOnchange = (e,idx) => {
      switch(idx)
      {
        case 0 : setName(e.target.value); break;
        case 1 : setEmail(e.target.value); break;
        case 2 : setComment(e.target.value); break;
      }
  }
  const handleSubmit = (e) => {
    if(name === "" || email === "" || comment === "")
    {
       alerter.current = <p>Vui lòng điền trường thông tin còn thiếu</p>
       setModalShow(true)
    }
    else if (! /^[a-z0-9]+@gmail.com/.test(email))
    {
      alerter.current = <p>Email của bạn không đúng format của chúng tôi ! chỉ hỗ trợ gmail</p>
      setModalShow(true)
    }
    console.table( 
      {name,email,comment}
    );
  }
  return (
    <Container className='contact my-5'>
      <Row> 
        <Col md={6} xs={12}>
         <Reveal  onlyOpacity={true}>
          <h3>CONTACT US AND FIND YOUR THINGS NEED</h3>
          <span>Công Ty X chi tiết</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Rerum atque excepturi voluptatum impedit optio culpa consequatur voluptatibus praesentium, 
                  Commodi doloremque omnis optio fuga iste, reiciendis magnam illo nemo, 
                  repellendus aut similique vero, placeat distinctio repudiandae error quod!</p>
          </Reveal>
        </Col>
        <Col md={6} xs={12}>
        <Reveal  onlyOpacity={true}>
        <Row>
            <Col md={6} className='mt-5' xs={12}>
           
                <FloatingLabel 
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3 form_contact"
                    > 
                    <Form.Control type="text" placeholder="Name" required  onChange={(e) => handleOnchange(e,0)}/>
                </FloatingLabel>
           
            </Col>
            <Col md={6} className='mt-5' xs={12}>
                    <FloatingLabel controlId="floatingPassword" label="Email address" className='form_contact'>
                        <Form.Control type="email" placeholder="Email address"  onChange={(e) => handleOnchange(e,1)} />
                    </FloatingLabel>  
            </Col>
            <Col md ={12} className='mt-2' xs={12}>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className='form_contact'>
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        onChange={(e) => handleOnchange(e,2)}
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel> 
            </Col>
            
            <Col md={{ span: 6, offset: 5 } }   xs={{ span: 6, offset: 3 } } className='mt-3'>
                <Button variant="dark" size="lg" onClick={handleSubmit}>Submit</Button>
            </Col>
        </Row>
        </Reveal>
        </Col>
      </Row>
      <Alert show={modalShow} onHide={ ()=>setModalShow(false)} 
        heading ={"Hello wolrd"}
        content={alerter.current}
        status={"warning"}
      />
    </Container>
  )
}
export default  MainContactPage