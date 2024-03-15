import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { logo } from './ImageManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import BarRight from './BarRight';

import "../css/Header.scss"
// Header Component Intialization
function Header()
{
    // Using Usestate Hook to make unmount to  Nav bar
    const [showNAV, setShowNAV] = useState(true);
    const [widthScreen,setWidthScreen] = useState(window.innerWidth);
    const handleBroswerResize = () => {
        setWidthScreen(window.innerWidth);
        (widthScreen >=576 && widthScreen <1199) ?  setShowNAV(false) : setShowNAV(true);
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
                <Col xl={4}  sm={6}>
                    <img src={logo}  className='logo mt-3'/>
                  </Col>
                 {showNAV &&
                     <Col xl={4} >
                     <Row> 
                           <Col xl={4}>
                               <Button  className='mt-5' >Home</Button>
                           </Col>
                           <Col xl={4}>
                               <Button className='mt-5'>About Us</Button>
                           </Col>
                           <Col xl={4}>
                             <Button className='mt-5'>Contact</Button>
                           </Col>
                     </Row>
                   </Col>
                 }
                  <Col xl={4} sm={6} >
                    {showNAV &&
                    <><input className=' mx-3 mt-5' id="search"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='find'/>
                    </>
                    }
                      <Button className='my-3 mx-2 sign_in'>Sign In</Button>
                    { showNAV===false && <BarRight />}
                  </Col>
              </Row>
           </Container>
        </Container>

    )
}
export default Header