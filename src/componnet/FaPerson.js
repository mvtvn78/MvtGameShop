import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reveal from './Reveal';
import "../css/FaPerson.scss"
// FaPerson Componnet Initialazation
function FaPerson({obj})
{
    return (
       
            <Row className='fa_Persons justify-content-center my-4'>
                <Col xs={12} className='text-center text-white heading'>
                    <Reveal onlyOpacity={true}>
                            <h3>{obj.heading}</h3>
                    </Reveal>
                </Col>
                <Col xs={4}   className='fa_info'>
                <Reveal onlyOpacity={true}>
                    <img src={obj.img1}/>
                    <h3 className='text_center'>{obj.text1}</h3>
                </Reveal>
                </Col>
                <Col xs={4}  className='fa_info' >
                <Reveal onlyOpacity={true}>
                    <img src={obj.img2}/>
                    <h3 className='text_center'>{obj.text2}</h3>
                </Reveal>
                </Col>
                <Col xs={4}  className='fa_info'>
                <Reveal onlyOpacity={true}>
                    <img src={obj.img3}/>
                    <h3 className='text_center'>{obj.text3}</h3>
                </Reveal>
                </Col>
            </Row>
           
    )
}
export default FaPerson