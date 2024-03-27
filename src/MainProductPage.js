import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reveal from './componnet/Reveal';
import Product from './componnet/Product';
import { Container, InputGroup,Button, Form ,ButtonGroup} from 'react-bootstrap';
import "./css/MainProductPage.scss"
import Paginator from './componnet/Paginator'; 
import * as imgs from "./componnet/ImageManager"
function MainProductPage() {
    const objPagination = {
        active : 1,
        items : ["value1","Valu2","valu3","Value4","Value5"],
    }
    return (
        <Container className='containr_production my-5'>
            <Row>
                <Col md={12} xs={12}>
                {/* Input Search */}
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
                <Col md={{span : 6,offset: 3}}  xs={{span : 12,offset: 0}} className='my-2' >
                <ButtonGroup aria-label="Basic example" >
                    <div className='list_Choice_Product'>
                        <Button variant="outline-light">Action</Button>
                        <Button variant="outline-light">Adventure</Button>
                        <Button variant="outline-light">RolePlay</Button>
                        <Button variant="outline-light">Horror</Button>
                        <Button variant="outline-light">Survivie</Button>
                        <Button variant="outline-light">Simulation</Button>
                    </div>
                </ButtonGroup>
                </Col>
            </Row>
            {/* LIST PRODUCTIONS */}
            <Row>
                <Col  xs={12}>
                    <Row>
                        <Col md ={3} xs={6} className='products'>
                        <Reveal index_Delay="0.2">   
                            <Product
                            gameSrc={imgs.minecraft} isWin={false} 
                            gameHeading="Minecraft: Java Edition for PC" 
                            gamePrice="480.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.2">   
                            <Product
                            gameSrc={imgs.GTA5} isWin={true} 
                            gameHeading="Grand Theft Auto V for PC" 
                            gamePrice="280.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.2">   
                            <Product
                            gameSrc={imgs.FiFa} isWin={false} 
                            gameHeading="FIFA 21 Version Origin for PC" 
                            gamePrice="380.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.2">   
                            <Product
                            gameSrc={imgs.Tsims} isWin={true} 
                            gameHeading="The Sims 4 Digital Deluxe" 
                            gamePrice="10.000VNĐ"
                            sale={true}
                            />
                        </Reveal>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.24">   
                            <Product
                            gameSrc={imgs.p1} isWin={false} 
                            gameHeading="DRAGON BALL Z: KAKAROT" 
                            gamePrice="200.000VNĐ"
                            sale={true}
                            />
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.24">   
                            <Product
                            gameSrc={imgs.p2} isWin={false} 
                            gameHeading="Contraband Police" 
                            gamePrice="380.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.24">   
                            <Product
                            gameSrc={imgs.p3} isWin={true} 
                            gameHeading="Outlast" 
                            gamePrice="280.000VNĐ"
                            sale={true}
                            />
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.24">   
                            <Product
                            gameSrc={imgs.p4} isWin={true} 
                            gameHeading="Hogwarts Legacy" 
                            gamePrice="480.000VNĐ"/>
                        </Reveal>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.26">   
                            <Product
                            gameSrc={imgs.p5} isWin={true} 
                            gameHeading="Dragon Ball FighterZ" 
                            gamePrice="780.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.26">   
                            <Product
                            gameSrc={imgs.p6} isWin={true} 
                            gameHeading="Cyberpunk 2077" 
                            gamePrice="580.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.26">   
                            <Product
                            gameSrc={imgs.p7} isWin={false} 
                            gameHeading="It Takes Two" 
                            gamePrice="280.000VNĐ"/>
                        </Reveal>
                        </Col>
                        <Col md ={3} xs={6}  className='products'>
                        <Reveal index_Delay="0.26">   
                            <Product
                            gameSrc={imgs.p8} isWin={true} 
                            gameHeading="Yakuza: Like a Dragon" 
                            gamePrice="680.000VNĐ"/>
                        </Reveal>
                        </Col>
                    </Row>
                </Col>
                {/* Pagination */}
                <Col md={ { span:6,offset:4} }  xs ={ { span:15,offset:3} }>
                    <Reveal index_Delay="0.26">   
                       <Paginator obj={objPagination}/>
                    </Reveal>
                </Col>
            </Row>
        </Container>
    )
}

export default MainProductPage