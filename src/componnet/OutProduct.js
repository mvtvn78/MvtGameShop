import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import "../css/OutProduct.scss"
import *  as imgs  from "./ImageManager"
import Button from 'react-bootstrap/Button';
import Reveal from './Reveal';
import { path } from "../utils/constant";
import { useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
// OutProduct Component Intialization
function OutProduct({heading})
{
    // using navigate to route correctly path of website
    const navigate = useNavigate();
    const options = {
        // add in the options you want
        duration: 350,
        smooth: true, // it mean timingfunction ( default : linear)
      };
    return (
       
        <Row className='out_productions my-5'>
            <Col sm={12} className='out_productions_head'>
                <Reveal index_Delay="0.2" > <h3 className='text_white'>{heading}</h3>
                    <Button onClick={ () => {  
                    // Fire Scroll Top
                    navigate(path.PRODUCT);
                    animateScroll.scrollToTop(options);
                     }} >Read More</Button> 
                </Reveal>
            </Col>
            {/* List Product */}
            <Col xl={3} xs={6} className='products'  onClick= { () => { navigate(path.DETAIL_PRODUCT);
                     // Fire Scroll Top
                     animateScroll.scrollToTop(options);
            }}>
                <Reveal index_Delay="0.24" >  
                    <Product  gameSrc={imgs.minecraft} 
                    isWin={false}
                    gameHeading="Minecraft: Java Edition for PC"
                    gamePrice="680.000VNĐ"/>
                </Reveal>
            </Col>
            <Col xl={3} xs={6} className='products'  onClick= { () => { navigate(path.DETAIL_PRODUCT);
                     // Fire Scroll Top
                     animateScroll.scrollToTop(options);
            }}>
                <Reveal index_Delay="0.26" >  
                    <Product gameSrc={imgs.GTA5} isWin={false} gameHeading="Grand Theft Auto V for PC" gamePrice="680.000VNĐ"/>
                </Reveal>
            </Col>
            <Col xl={3} xs={6} className='products'  onClick= { () => { navigate(path.DETAIL_PRODUCT);
                     // Fire Scroll Top
                     animateScroll.scrollToTop(options);
            }}>
                <Reveal index_Delay="0.28" >  
                    <Product gameSrc={imgs.Tsims} isWin={false} gameHeading="The Sims 4 Digital Deluxe" gamePrice="680.000VNĐ"/>
                </Reveal>
            </Col>
            <Col xl={3} xs={6} className='products'  onClick= { () => { navigate(path.DETAIL_PRODUCT);
                     // Fire Scroll Top
                     animateScroll.scrollToTop(options);
            }}>
                <Reveal index_Delay="0.30" >  
                    <Product gameSrc={imgs.FiFa} isWin={false} gameHeading="FIFA 21 Version Origin for PC" gamePrice="680.000VNĐ"/>
                </Reveal>
            </Col>
            
        </Row>
       
    )
}
export default OutProduct
