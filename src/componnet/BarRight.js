import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faFacebook ,faGithub} from '@fortawesome/free-brands-svg-icons'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate} from 'react-router-dom';
import "../css/BarRight.scss"
import {path,links} from "../utils/constant"
function BarRight() {
  const [show, setShow] = useState(false);
  // Navigate
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="bar_toogle" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} className='text-white' />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="canvas_lbar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='heading mt-3'>
            <h3>My Shop</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup defaultActiveKey="#link1" className='text_not_outstading md-5'>
            <ListGroup.Item  action variant="dark" onClick={ () => {navigate(path.HOME);handleClose();}} className='item border_none'>
                           Home
            </ListGroup.Item>
            <ListGroup.Item  action variant="dark" onClick={ () => {navigate(path.HOME);handleClose();}} className='item  border_none'>
                           24/7 Support
            </ListGroup.Item>
            <ListGroup.Item action variant="dark" onClick={ () => {navigate(path.PRODUCT);handleClose();}}  className='item  border_none'>
                           Product 
            </ListGroup.Item>
            <ListGroup.Item action  variant="dark" onClick={ () => {navigate(path.CONTACT);handleClose(); }}  className='item border_none '>
                           Contact Us
            </ListGroup.Item>
            <ListGroup.Item action  variant="dark" onClick={ () => {navigate(path.ABOUT );handleClose();}} className='item border_none '>
                           About Us
            </ListGroup.Item>
            <ListGroup.Item  action  variant="dark"onClick={ () => {navigate(path.SIGN_IN);handleClose();}}  className='item  border_none'>
                           Sign In
            </ListGroup.Item>
          </ListGroup>
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
          {/* Icon */}
          <ListGroup horizontal className='my-5 d-flex justify-content-center'>
              <ListGroup.Item variant="secondary" className='cursor_point bg_lightdark'  onClick={ () => { 
                window.location.assign(links.YTB);
                }}>
                <FontAwesomeIcon icon={faYoutube}  className='icon mx-2'/>
              </ListGroup.Item>
              <ListGroup.Item variant="secondary" className='cursor_point bg_lightdark' onClick={ () => { 
                window.location.assign(links.FB);
                }}> 
                <FontAwesomeIcon icon={faFacebook}   className='icon__fb mx-2 '/>
              </ListGroup.Item>
              <ListGroup.Item variant="secondary" className='cursor_point bg_lightdark' onClick={ () => { 
                window.location.assign(links.GITHUB);
                }}> 
                <FontAwesomeIcon icon={faGithub}  className='icon__github mx-2'/>
              </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarRight;