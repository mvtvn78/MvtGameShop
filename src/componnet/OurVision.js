import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import "../css/OurVision.scss"
import *  as imgs  from "./ImageManager"
import Reveal from './Reveal';
import {  useNavigate,Link } from 'react-router-dom';
import { path } from '../utils/constant';
import { animateScroll } from 'react-scroll';
function OurVision()
{    // Navigate
    const navigate = useNavigate();
    const options = {
        // add in the options you want
        duration: 350,
        smooth: true, // it mean timingfunction ( default : linear)
    };
    return (
            <Row >
                <Col xs={6}  >
                    <Reveal index_Delay="0.2">
                        <div className='OurVis_head'>
                            <h3 className='text_white mb-4 heading' >Our Vision</h3>
                            <p className='text_not_outstading mb-5'>  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat! Esse, aliquid. Exercitationem officia est eum labore, rem harum saepe porro autem nostrum iste vitae et, nam ut qui, earum a laborum facere aspernatur veniam nisi accusamus.
                            Voluptate natus, dolorum, eveniet dolor dolores incidunt ipsam odio nemo doloribus porro excepturi!
                            </p>
                        </div>
                    </Reveal>
                    <Reveal index_Delay="0.24">
                        <div className='OurVis_foot d-flex justify-content-left '> 
                            <Button id="btn-read"
                            onClick={ (e) => {e.preventDefault(); navigate(path.ABOUT); // Fire Scroll Top
                            animateScroll.scrollToTop(options);} }
                            >   
                            Read More                             
                            </Button>
                            <FontAwesomeIcon icon={faCirclePlay}  className='OurVis_pl font_size_icon d-block m-2'/>
                        </div>
                    </Reveal>
                </Col>

                <Col xs={6}  className='OurVis_footer'>
                    <Reveal index_Delay="0.26" onlyOpacity={true}>   
                        <img src={imgs.Yasuo}/>
                    </Reveal>
                </Col>
            </Row>
    )
}
export default OurVision