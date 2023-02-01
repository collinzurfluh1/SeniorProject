
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
          Coolest Pool EVA
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='poolHeader'>
            <h4>Pool Stats:</h4>
        </div>
        <div className='poolStatsList'>
            <div className='poolStat'>Price: $56,000</div>
            <div className='poolStat'>Length: 200ft</div>
            <div className='poolStat'>Width: 12ft</div>
            <div className='poolStat'>Height: 10ft</div>
            <div className='poolStat'>Concrete: 1000 lbs $20,000</div>
            <div className='poolStat'>PVC: 10ft $50</div>
            <div className='poolStat'>Wiring: 10ft $10</div>

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