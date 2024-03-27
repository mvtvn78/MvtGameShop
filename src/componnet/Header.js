import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { logo } from './ImageManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import BarRight from './BarRight';
import {  useNavigate } from 'react-router-dom';
import {path} from "../utils/constant"
import "../css/Header.scss"
// Header Component Intialization
function Header()
{
    // console.log("re-render header");
    // Navigate
    const navigate = useNavigate();
    // Using Usestate Hook to make unmount to  Nav bar
    const [showNAV, setShowNAV] = useState(true);
    const [widthScreen,setWidthScreen] = useState(window.innerWidth);
    // Check to detect your device by width screen
    const handleBroswerResize = () => {
        setWidthScreen(window.innerWidth);
        ( widthScreen <1199) ?  setShowNAV(false) : setShowNAV(true);
    }
    // Using Effect with dependices is width_screen of broswer
    useEffect( ()=>{
        handleBroswerResize();
        window.onresize= () => {
            handleBroswerResize();
        }
    }, [widthScreen])
    return (
            <Container fluid className='container_header'>
                <Container className='header'>
                    <Row>
                        <Col xl={4}  xs={6} >
                            <img src={logo}  className='logo mt-3' onClick={() => {  navigate(path.HOME)}} />
                        </Col>
                        {/* ShowNav if your device is Laptop  or no if it's Tablet or Moblie*/}
                        {showNAV &&
                            <Col xl={4} >
                            <Row> 
                                <Col xl={4}>
                                    <Button  className='mt-5'
                                    onClick={ () => {  navigate(path.HOME)}}
                                    >Home
                                    </Button>
                                </Col>
                                <Col xl={4}>
                                    <Button className='mt-5'
                                    onClick={ () => {  navigate(path.ABOUT)}}
                                    >
                                        ABOUT US                    
                                    </Button>
                                </Col>
                                <Col xl={4}>
                                    <Button className='mt-5' onClick={ () => {  navigate(path.CONTACT)}}>Contact                                    
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        }
                        <Col xl={4} xs={6}  >
                             {/* showInput and Btn Search if your device is Laptop  or no if it's Tablet or Moblie*/}
                            {showNAV &&
                            <><input className=' mx-3 mt-5' id="search"/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='find'/>
                            </>
                            }
                            <Button className='my-3 mx-2 sign_in' onClick={ () => {  navigate(path.SIGN_IN)}}>Sign In
                            
                            </Button>
                             {/* show if your device's Tablet or Moblie*/}
                            { showNAV===false && <BarRight />}
                        </Col>
                    </Row>
                </Container>
            </Container>
    )
}
export default Header