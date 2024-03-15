import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import "../css/OutProduct.scss"
import *  as imgs  from "./ImageManager"
import Button from 'react-bootstrap/Button';
// OutProduct Component Intialization
function OutProduct()
{
  
    return (
        <Row className='out_productions my-5'>
            <Col sm={12} className='out_productions_head'>
                <h3 className='text_white'>SẢN PHẨM NỔI BẬT</h3>
                <Button>Read More</Button>
            </Col>
            {/* List Product */}
            <Col xl={3} sm={6} className='products'>
                <Product gameSrc={imgs.minecraft} isWin={false} gameHeading="Minecraft: Java Edition for PC" gamePrice="680.000VNĐ"/>
            </Col>
            <Col xl={3} sm={6}  className='products'>
                <Product gameSrc={imgs.GTA5} isWin={false} gameHeading="Grand Theft Auto V for PC" gamePrice="680.000VNĐ"/>
            </Col>
            <Col xl={3}  sm={6} className='products'>
                <Product gameSrc={imgs.Tsims} isWin={false} gameHeading="The Sims 4 Digital Deluxe" gamePrice="680.000VNĐ"/>
            </Col>
            <Col xl={3} sm={6} className='products'>
                <Product gameSrc={imgs.FiFa} isWin={false} gameHeading="FIFA 21 Version Origin for PC" gamePrice="680.000VNĐ"/>
            </Col>
        </Row>
    )
}
export default OutProduct
