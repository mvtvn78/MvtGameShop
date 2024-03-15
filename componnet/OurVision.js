import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import "../css/OurVision.scss"
import *  as imgs  from "./ImageManager"
function OurVision()
{

    return (
            <Row >
                <Col xl={6} sm={8} >
                    <div className='OurVis_head'>
                        <h3 className='text_white mb-4' >Our Vision</h3>
                        <p className='text_not_outstading mb-5'>  
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat! Esse, aliquid. Exercitationem officia est eum labore, rem harum saepe porro autem nostrum iste vitae et, nam ut qui, earum a laborum facere aspernatur veniam nisi accusamus.
                        Voluptate natus, dolorum, eveniet dolor dolores incidunt ipsam odio nemo doloribus porro excepturi!
                        </p>
                    </div>
                    <div className='OurVis_foot d-flex justify-content-left '> 
                        <Button>Read More</Button>
                        <FontAwesomeIcon icon={faCirclePlay}  className='OurVis_pl font_size_icon d-block m-2'/>
                    </div>
                </Col>

                <Col xl={6} sm={4} className='OurVis_footer'>
                    <img src={imgs.Yasuo}/>
                </Col>
            </Row>
    )
}
export default OurVision