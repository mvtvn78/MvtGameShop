import React from 'react'
import { Col } from 'react-bootstrap'
import Reveal from './Reveal';
import "../css/ItemTransactionHistory.scss"
function ItemTransactionHistory( {img,par}) {
  return (
    <>
    <Col xs="6" className='my-2 tran_left'> 
        <Reveal>
            <img src={img}/>
        </Reveal>
    </Col>
    <Col xs="6" className='my-2 tran_right'> 
         <Reveal>
            <p>
                {par}
            </p>
        </Reveal>
    </Col>
    </>
  )
}
export default ItemTransactionHistory
