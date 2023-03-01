
import React from 'react'
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import '../SCSS/poolitem.scss'

function PoolItem(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.pool.pool.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='poolHeader'>
            <h4>{props.pool.pool.title}</h4>
        </div>
        <div className='poolStatsList'>
            <div className='poolStat'>Price: ${props.pool.pool.cost}</div>
            <div className='poolStat'>Length: {props.pool.pool.length}ft</div>
            <div className='poolStat'>Width: {props.pool.pool.width}ft</div>
            <div className='poolStat'>Depth Shallow: {props.pool.pool.depth_shallow}</div>
            <div className='poolStat'>Depth Deep: {props.pool.pool.depth_deep}</div>
            <div className='poolStat'>Slant Type: {props.pool.pool.slant_type}</div>
            <div className='poolStat'>Lining Type: {props.pool.pool.lining_type}</div>
            <div className='poolStat'>Cover 1: {props.pool.pool.cover1}</div>
            <div className='poolStat'>Cover 2:{props.pool.pool.cover2}</div>
            <div className='poolStat'>Piping: {props.pool.pool.piping}</div>
            <div className='poolStat'>Drain: {props.pool.pool.drain}</div>
            <div className='poolStat'>Skimmer: {props.pool.pool.skimmer}</div>
            <div className='poolStat'>Pump: {props.pool.pool.pump}</div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" color="success">Save Pool</Button>
        <Button variant="contained" onClick={props.onHide} color="error">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PoolItem;