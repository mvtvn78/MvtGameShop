import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faFacebook ,faGithub} from '@fortawesome/free-brands-svg-icons'
import ListGroup from 'react-bootstrap/ListGroup';
import "../css/BarRight.scss"
function BarRight() {
  const [show, setShow] = useState(false);

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
            <ListGroup.Item  variant="dark" action href="#link1" className='item border_none'>
                           Home
            </ListGroup.Item>
            <ListGroup.Item   variant="dark" action href="#link2" className='item  border_none'>
                           24/7 Support
            </ListGroup.Item>
            <ListGroup.Item  variant="dark"  action href="#link3" className='item  border_none'>
                           Product 
            </ListGroup.Item>
            <ListGroup.Item  variant="dark" action href="#link4" className='item border_none '>
                           Contact Us
            </ListGroup.Item>
            <ListGroup.Item  variant="dark" action href="#link5" className='item border_none '>
                           About Us
            </ListGroup.Item>
            <ListGroup.Item   variant="dark" action href="#link6" className='item  border_none'>
                           Sign In
            </ListGroup.Item>
          </ListGroup>
          {/* Icon */}
          <ListGroup horizontal className='my-5 d-flex justify-content-center'>
            <ListGroup.Item variant="secondary" className='cursor_point bg_lightdark'><FontAwesomeIcon icon={faYoutube}  className='icon mx-2'/></ListGroup.Item>
            <ListGroup.Item variant="secondary" className='cursor_point bg_lightdark'> <FontAwesomeIcon icon={faFacebook}  className='icon__fb mx-2 '/></ListGroup.Item>
            <ListGroup.Item variant="secondary" className='cursor_point bg_lightdark'> <FontAwesomeIcon icon={faGithub} className='icon__github mx-2'/></ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarRight;