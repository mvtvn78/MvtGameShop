import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import { Container } from 'react-bootstrap';
import "../css/FaPerson.scss"

function FaPerson({obj})
{
    return (
            <Row className='fa_Persons justify-content-center my-5'>
                <Col sm={12} className='text-center text-white heading'>
                    <h3>{obj.heading}</h3>
                </Col>
                <Col sm={4}   className='fa_info'>
                    <img src={obj.img1}/>
                    <h3 className='text_center'>{obj.text1}</h3>
                </Col>
                <Col sm={4}  className='fa_info' >
                    <img src={obj.img2}/>
                    <h3 className='text_center'>{obj.text2}</h3>
                </Col>
                <Col sm={4}  className='fa_info'>
                    <img src={obj.img3}/>
                    <h3 className='text_center'>{obj.text3}</h3>
                </Col>
            </Row>
    )
}
export default FaPerson