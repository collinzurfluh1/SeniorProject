import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import '../SCSS/poolitem.scss'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import EditPoolItem from './EditPoolItem';


function PoolItem(props) {
  const [username, setName] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [active, setActive] = useState(false)

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
    } catch (error) {}
  }

  useEffect(()=>{
    refreshToken();
  },[])

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
            <div className='poolStat'>Price: ${props.pool.pool.cost == null ?
          "N/A"
        : props.pool.pool.cost}</div>
            <div className='poolStat'>Length: {props.pool.pool.length == null ?
          "N/A"
        : props.pool.pool.length}ft</div>
            <div className='poolStat'>Width: {props.pool.pool.width == null ?
          "N/A"
        : props.pool.pool.width}ft</div>
            <div className='poolStat'>Depth Shallow: {props.pool.pool.depth_shallow == null ?
          "N/A"
        : props.pool.pool.depth_shallow}ft</div>
            <div className='poolStat'>Depth Deep: {props.pool.pool.depth_deep == null ?
          "N/A"
        : props.pool.pool.depth_deep}ft</div>
            <div className='poolStat'>Slant Type: {props.pool.pool.slant_type == null ?
          "N/A"
        : props.pool.pool.slant_type}</div>
            <div className='poolStat'>Lining Type: {props.pool.pool.lining_type == null ?
          "N/A"
        : props.pool.pool.lining_type}</div>
            <div className='poolStat'>Cover 1: {props.pool.pool.cover1 == null ?
          "N/A"
        : props.pool.pool.cover1}</div>
            <div className='poolStat'>Cover 2: {props.pool.pool.cover2 == null ?
          "N/A"
        : props.pool.pool.cover2}</div>
            <div className='poolStat'>Piping: {props.pool.pool.piping == null ?
          "N/A"
        : props.pool.pool.piping}</div>
            <div className='poolStat'>Drain: {props.pool.pool.drain == null ?
          "N/A"
        : props.pool.pool.drain}</div>
            <div className='poolStat'>Skimmer: {props.pool.pool.skimmer == null ?
          "N/A"
        : props.pool.pool.skimmer}</div>
            <div className='poolStat'>Pump: {props.pool.pool.pump == null ?
          "N/A"
        : props.pool.pool.pump}</div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        {props.pool.pool.owner == username ?
          <Button variant="contained" color="primary" onClick={(e) => {setModalShow(true) }}>Edit Pool</Button>
        : <Button variant="contained" color="success">Save Pool</Button>}
        <Button variant="contained" onClick={props.onHide} color="error">Close</Button>
      </Modal.Footer>
      <EditPoolItem
      show={modalShow}
      onHide={() => setModalShow(false)}
      pool={props}
      />
    </Modal>
  );
}

export default PoolItem;