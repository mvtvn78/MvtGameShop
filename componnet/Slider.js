import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import *  as imgs  from "./ImageManager"
import "../css/Slider.scss"
// 1024x600
function Slider()
{
    
    return (
           <Col xl={12} className='slider' >
                    <Carousel >
                        <Carousel.Item interval={2000} className='slider_item'>
                            <img src={imgs.S1}/>
                        </Carousel.Item>

                        <Carousel.Item interval={1500} className='slider_item'>
                            <img src={imgs.S2}/>
                        </Carousel.Item>

                        <Carousel.Item interval={1000} className='slider_item'>
                            <img src={imgs.S3}/>
                        </Carousel.Item>

                        <Carousel.Item interval={500} className='slider_item'>
                            <img src={imgs.S4}/>
                        </Carousel.Item>

                        <Carousel.Item className='slider_item' >
                            <img src={imgs.S5} />
                        </Carousel.Item>
                    </Carousel>
           </Col>
    )
}
export default Slider
