import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import *  as imgs  from "./componnet/ImageManager";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import "./css/MainDetailsProduct.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Reveal from './componnet/Reveal';
import OutProduct from './componnet/OutProduct';
function Des()
{
    return (
    <Reveal>
        <p>Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Facere ratione quae at hic voluptatum praesentium aspernatur minima ex saepe doloremque asperiores 
        suscipit eveniet beatae ullam libero, inventore blanditiis qui aperiam corrupti tempora. Ut, 
        distinctio, eligendi corporis sequi neque consequatur debitis nostrum quasi voluptates perspiciatis
        veritatis eaque, sint odit aperiam modi obcaecati accusamus adipisci esse aut dicta nihil quaerat 
         officiis soluta ab? Quos beatae quas alias aspernatur ipsum officiis corporis quaerat amet nobis 
         soluta laudantium cupiditate, dolorum tempore libero? Ad quis illo consequuntur tenetur debitis 
        alias a aliquid animi. Ut, veniam provident labore inventore neque, fugit facere mollitia 
        repudiandae molestiae tempora recusandae quos voluptatum necessitatibus? Perferendis provident 
        ratione nemo voluptates dignissimos temporibus impedit nesciunt beatae ex voluptatum architecto 
        nulla illo eveniet, obcaecati ea soluta dolorum, error reiciendis debitis, eos sequi doloribus 
        pariatur perspiciatis mollitia. Id, repellendus atque vero libero harum molestias illo? At in 
        fugiat rerum minus voluptatibus hic autem molestiae doloremque eveniet praesentium, voluptas 
        cumque expedita culpa, esse ipsa dolorum iste ipsam aspernatur odio debitis ab vero? Pariatur
        quam fugiat officia obcaecati eaque exercitationem similique modi dolorem reiciendis fuga, suscipit, 
        tenetur maxime saepe earum explicabo ex amet vitae repellat voluptatem porro voluptates laudantium 
        omnis. Repudiandae aut eius quibusdam assumenda quis!
        </p>
    </Reveal>
    )
}
function Add_Info()
{
    return (
        <Reveal>
        <p>Lorem ipsum dolor sit, 
            Add_Info
        </p>
        </Reveal>
    )
}
function Preview()
{
    return (
        <Reveal>
        <p>Lorem ipsum dolor sit, 
            Preview
        </p>
        </Reveal>
    )
}
function MainDetailsProduct({sale}) {
    // Using state to make correctly component render for detail info
    // 0 : Description, 1: Addtional Information , somethingelse: preview
    const [detail,setDetail]= useState(0)
    return (
    <Container>
        <Row className='detail_product my-5'>
            <Col xs={6} className='your_game'>
            <Reveal onlyOpacity={true}>
               <img src={imgs.minecraft}/>
              
            </Reveal>
            </Col>
            <Col xs={6} className='right_detail'>
               <Row>
                    <Col xs={12}>
                    <Reveal index_Delay={0.22}>
                        <div className='cus_review'>
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                            <span >(1509 Review) </span>
                        </div>
                    </Reveal>
                    </Col>
                    <Col xs={12}>
                    <Reveal  index_Delay={0.26}>
                        <h3> GAME CONTROLLER</h3>
                        <span className='price'>640.000 VNĐ</span>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Suscipit asperiores natus modi molestiae sapiente animi ut 
                         Suscipit asperiores natus modi molestiae sapiente animi ut 
                         Suscipit asperiores natus modi molestiae sapiente animi ut 
                         Suscipit asperiores natus modi molestiae sapiente animi ut 
                         placeat fuga debitis aspernatur.
                        </p>
                    </Reveal>
                    </Col>
                    <Col xs={12}>
                    <Reveal  index_Delay={0.28}>
                    <Button variant="secondary"  >Add Your Cart
                        <FontAwesomeIcon icon={faShoppingCart}  />
                    </Button>
                    </Reveal>
                    </Col>
               </Row>
            </Col>
        </Row>
        <Row className='detail_info my-5'>
            <Col xs={12}>
            <Reveal index_Delay={0.25}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-light" onClick={ () => setDetail(0) }>Description</Button>
                <Button variant="outline-light" onClick={ () => setDetail(1) }>Addtional Information</Button>
                <Button variant="outline-light" onClick={ () => setDetail(2) }>Preview</Button>    
            </ButtonGroup>
            </Reveal>
            </Col>
            <Col xs={12} className='detail_ops mt-3' >
                { (detail==0) ? <Des/> : (detail==1) ? <Add_Info/>  : <Preview/>}
            </Col>
        </Row>
        <Row className='rel_container '>
            <Col xs={12} className='rel_prods' >
                    <OutProduct heading="RELATED PRODUCTIONS"/>
            </Col>
        </Row>
    </Container>
)
}
export default  MainDetailsProduct