import React, { useState } from 'react';
import { Row,Col,Container,InputGroup,Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as imgs from "./componnet/ImageManager";
import Product from './componnet/Product';
import Paginator from './componnet/Paginator';
import Reveal from './componnet/Reveal';
import ItemTransactionHistory from './componnet/ItemTransactionHistory';
import "./css/MainProfile.scss";
function Info() {
  const objPagination = {
    active : 1,
    items : ["value1","Valu2","valu3","Value4","Value5"],
  }
  return (
    <>
      <Col xs={12} className='info my-2' > 
              <ul>
                <Reveal>
                  <li>Username : mvt</li>
                  <li>Password : *****  <Button variant="outline-primary">Change</Button>  </li>
                  <li>Email : 12gtbtmvt@gmail.com 
                  <ButtonGroup aria-label="Basic example" className='mx-2'>
                      <Button variant="outline-primary">Modify</Button>
                      <Button variant="outline-primary">Indentify</Button>
                  </ButtonGroup>  </li>
                  <li>Phone Number :0328036784
                  <ButtonGroup aria-label="Basic example" className='mx-2'>
                      <Button variant="outline-primary">Modify</Button>
                      <Button variant="outline-primary">Indentify</Button>
                  </ButtonGroup>  </li>
                  </Reveal>
              </ul>
      </Col>
      <Col xs={12} className='tran_history my-2'  > 
              <Reveal>
              <h3> Transaction History</h3>
              
              </Reveal>
              <Row className='list_history'>
                {/* Input search */}
                  <Col xs={12}>
                  <InputGroup className="mt-4">
                      <Form.Control
                      placeholder="How are you today"
                      aria-label="How are you today"
                      aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                      Search
                      </Button>
                  </InputGroup>
                  </Col>
                  {/* Item 1 */}
                   <ItemTransactionHistory img={imgs.minecraft} 
                   par="Lorem ipsum dolor sit, amet consectetur adipisicing elit .
                   At reiciendis quidem maxime inventore neque, modi dolor suscipit rem.
                   Fugiat corrupti vero a explicabo nostrum cupiditate, aspernatur
                   incidunt placeat suscipit consequatur nobis. Velit, beatae? Iure 
                   numquam dolore eum libero eius provident incidunt possimus,"
                   />
                   {/* Item 2 */}
                   <ItemTransactionHistory img={imgs.minecraft} 
                   par="Lorem ipsum dolor sit, amet consectetur adipisicing elit .
                   At reiciendis quidem maxime inventore neque, modi dolor suscipit rem.
                   Fugiat corrupti vero a explicabo nostrum cupiditate, aspernatur
                   incidunt placeat suscipit consequatur nobis. Velit, beatae? Iure 
                   numquam dolore eum libero eius provident incidunt possimus,"
                   />
                    {/* Pagination */}
                  <Row className='mt-3'>
                  <Reveal>
                    <Col xs={ {span:12 , offset:3 }}>
                    <Paginator obj={objPagination}/>
                    </Col>
                  </Reveal>

                  </Row>
              
              </Row>             
      </Col>
      
    </>
  )
}
//Deposit Component 
function Deposit() {
  return (
    <>
      <Col xs={12} className='d-flex justify-content-center my-2'>
        <Row className='pay_ser'>
           <h3>Payment Services</h3>
            <Col xs={4} > 
              <img src={imgs.QR1}/>
            </Col> 
            <Col xs={4} > 
              <img src={imgs.QR2}/>
            </Col>  
            <Col xs={4} > 
              <img src={imgs.QR3}/>
            </Col> 
        </Row>  
      </Col> 
      <Row className='note my-3'>
        <Col xs={ { span:10 , offset: 1}}>
          <h3>Important note</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Similique sit natus iure autem tenetur reprehenderit aliquid eligendi dolores? Odio harum, v
            el ratione quia sapiente inventore veritatis nam molestiae eum itaque rerum quo ipsam, sint esse 
            debitis necessitatibus perspiciatis impedit excepturi mollitia dolor, architecto ullam distinctio v
            elit blanditiis? Dolorum, vero inventore! Ducimus et neque atque nemo soluta exercitationem saepe, 
            voluptatum natus vero a voluptatibus tenetur odio excepturi labore esse! Molestiae, ullam. </p>
        </Col>
      </Row>  
    </>
  )
}
// Cart Component
function Cart() {
  const objPagination = {
    active : 1,
    items : ["value1","Valu2","valu3"],
  }
  return (
    <>
      <Col xs={12} >
        <Row className='your_cart'>
           <h3>You have 6 cart</h3>
           <Col  xs={{span: 9,offset:2}}>
                  <InputGroup className="mt-4">
                      <Form.Control
                      placeholder="How are you today"
                      aria-label="How are you today"
                      aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                      Search
                      </Button>
                  </InputGroup>
            </Col>
           {/* Item1 */}
           <Col xs={12}>
            
             <Row className='justify-content-end g-3'>
            
             <Col xs={5} className='cart_it' >
                <Product  gameSrc={imgs.minecraft} 
                        isWin={false}
                        gameHeading="Minecraft: Java Edition for PC"
                        gamePrice="680.000VNĐ"/>
              </Col>
              <Col xs={3} className='d-flex align-items-end'>
                <ButtonGroup aria-label="Basic example"  className='btns'>
                          <Button variant="outline-primary">Buy</Button>
                          <Button variant="outline-primary">Remove</Button>
                  </ButtonGroup>
              </Col>
              <Col xs={5}  className='cart_it'>
                <Product  gameSrc={imgs.minecraft} 
                        isWin={false}
                        gameHeading="Minecraft: Java Edition for PC"
                        gamePrice="680.000VNĐ"/>
              </Col>
              <Col xs={3} className='d-flex align-items-end '>
                <ButtonGroup aria-label="Basic example" className='btns' >
                          <Button variant="outline-primary">Buy</Button>
                          <Button variant="outline-primary">Remove</Button>
                  </ButtonGroup>
              </Col>
             </Row>
             {/* Pagination */}
             <Row className='mt-3'>
                  <Col xs={ {span:12 , offset:4 }}>
                    <Paginator obj={objPagination}/>
                  </Col>
              </Row>
           </Col>
        </Row>  
      </Col> 
    </>
  )
}
// MainProfile Component
function MainProfile() {
  const [mode,setMode] =useState(0)
   //  Handle re-render too much b/c change state
   const handleBtnChange =(index) => {
    if(mode !== index)
        setMode(index);
  }
  return (
    <Row className='main_profile my-5'>
      <Col xs={4}>
        <img src={imgs.av1}/>
      </Col>
      <Col xs={8}>
        <div className='right_head_profile d-flex flex-column  justify-content-evenly' > 
            <h3 >@Mvt : <span>250.000VNĐ</span></h3>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-primary" active={  (mode==0)  ? true: false}  
                onClick={ () => { handleBtnChange(0); }}
                 >
                  My Info</Button>
                <Button variant="outline-primary" active={  (mode==1)  ? true: false}  
                onClick={ () => { handleBtnChange(1); }}
                 >
                  Deposit</Button>
                <Button variant="outline-primary" active={  (mode==2)  ? true: false}  
                onClick={ () => { handleBtnChange(2); }}
                 >
                  Your Cart</Button>
            </ButtonGroup>
        </div>
      </Col>
      { mode ==0 ? <Info/> : mode ==1 ? <Deposit/> :<Cart/> }
    </Row>
  )
}
export default  MainProfile