import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
// Props were pass is Object 
// Contain data for render Paginator
function Paginator({obj}) {
  return (
    <Pagination className='Paginator'>
        {obj.items.map( (el,id) => <Pagination.Item  size="lg" key={id} active ={id+1 == obj.active}> {id+1} </Pagination.Item> )}
    </Pagination>
  )
}
export default Paginator