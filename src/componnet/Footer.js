import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebook ,faGithub} from '@fortawesome/free-brands-svg-icons'
import ListGroup from 'react-bootstrap/ListGroup';
import { logo } from './ImageManager';
import "../css/Footer.scss"
import Reveal from './Reveal';
import {path,links} from "../utils/constant"
import { useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
function Footer()
{
    // Navigate
    // console.log("re-render footer");
    const options = {
        //  add new your options here
        duration: 350,
        smooth: true,
      };
    const navigate = useNavigate();
   
    return (
        
            <Container fluid className='footer'>
                <Container>
                <Reveal index_Delay={0.2}>
                    <Row>
                        <Col xl={4} sm ={6} > 
                            <Row>
                                <Col xl={4} className='logo'>
                                    <img src={logo}/>
                                </Col>
                                <Col xl={8} className='log_heading'>
                                    <h3 className='text_white my-5'>STORE DETAILS</h3>
                                </Col>
                                <Col xl={12} className='info_left'>
                                    <p className='text_not_outstading'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Similique accusantium omnis accusamus dicta at voluptatum corrupti iusto eius? 
                                    Culpa at exercitationem ut tenetur veniam qui debitis quasi nihil nostrum accusamus autem porro eum quod nemo magnam,
                                    facilis reprehenderit iusto. Consequuntur reiciendis atque officia corrupti molestiae.
                                    </p>
                                <Row className='icon_left'>
                                    <Col xl={12} className='d-flex'>
                                        <FontAwesomeIcon icon={faYoutube} onClick={ () => {window.location.assign(links.YTB)}} className='icon mx-2'/>
                                        <FontAwesomeIcon icon={faFacebook} onClick={ () => {window.location.assign(links.FB)}}  className='icon__fb mx-2'/>
                                        <FontAwesomeIcon icon={faGithub} onClick={ () => {window.location.assign(links.GITHUB)}}  className='icon__github mx-2'/>
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={4} sm ={6}  > 
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2426869184783!2d106.70375937488274!3d10.79271558935704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299a2a7aeb89%3A0xfe75f3431d8fd812!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2kgLSBQaMOibiBoaeG7h3UgTWnhu4FuIE5hbQ!5e0!3m2!1svi!2s!4v1710406840855!5m2!1svi!2s"  style={ {border:'0',width:'100%',height:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                        <Col xl={4} sm ={12} className='disable_On_Phone'> 
                        <h3 className='text_white text_center my-3'> SHOP DETAILS</h3>
                        <ListGroup defaultActiveKey="#link1" className='text_not_outstading'>
                            <ListGroup.Item onClick={ () => {navigate(path.HOME);
                            // Fire Scroll Top
                            animateScroll.scrollToTop(options);
                            }} className='item border_none'>
                            Home
                            </ListGroup.Item>
                            
                            <ListGroup.Item onClick={ () => {navigate(path.PRODUCT);
                             // Fire Scroll Top
                             animateScroll.scrollToTop(options);
                            }}  className='item  border_none'>
                            Product 
                            </ListGroup.Item>
                            <ListGroup.Item onClick={ () => {navigate(path.CONTACT);
                             // Fire Scroll Top
                             animateScroll.scrollToTop(options);
                            }}  className='item border_none '>
                            Contact Us
                            </ListGroup.Item>
                            <ListGroup.Item onClick={ () => {navigate(path.ABOUT);
                             // Fire Scroll Top
                             animateScroll.scrollToTop(options);
                            }} className='item border_none '>
                            About Us
                            </ListGroup.Item>
                            <ListGroup.Item onClick={ () => {navigate(path.SIGN_IN);
                             // Fire Scroll Top
                             animateScroll.scrollToTop(options);
                            }}  className='item  border_none'>
                            Sign In
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        </Row>
                    </Reveal>
                </Container>
            </Container>
    )
}
export default Footer