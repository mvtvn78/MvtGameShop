import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import *  as imgs  from "./ImageManager"
import "../css/Slider.scss"
import Reveal from './Reveal';
// 1024x600 format all image
// Slider Component using Carousel of Bootstrap
function Slider()
{
    
    return (
        <Reveal>
           <Col xs={12} className='slider' >
                    <Carousel >
                        {/* Item1  */}
                        <Carousel.Item interval={2000} className='slider_item'>
                            <img src={imgs.S1}/>
                        </Carousel.Item>
                        {/* Item2 */}
                        <Carousel.Item interval={1500} className='slider_item'>
                            <img src={imgs.S2}/>
                        </Carousel.Item>
                        {/* Item3 */}
                        <Carousel.Item interval={1000} className='slider_item'>
                            <img src={imgs.S3}/>
                        </Carousel.Item>
                        {/* Item4 */}
                        <Carousel.Item interval={500} className='slider_item'>
                            <img src={imgs.S4}/>
                        </Carousel.Item>
                        {/* Item5 */}
                        <Carousel.Item className='slider_item' >
                            <img src={imgs.S5} />
                        </Carousel.Item>
                    </Carousel>
           </Col>
        </Reveal>
    )
}
export default Slider
