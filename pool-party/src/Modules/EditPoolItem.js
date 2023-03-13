import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import '../SCSS/poolitem.scss'
import axios from 'axios';
import jwt_decode from "jwt-decode";


function EditPoolItem(props) {
  const [username, setName] = useState('');
  const [chlorine,setPipe]=useState([]);
  const length = props.pool.pool.pool.length;
  const width = props.pool.pool.pool.width;
  const depth = props.pool.pool.pool.depth_deep;
  const basinType = "Gunnite";

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
    } catch (error) {}
  }

  const getAllChlorine = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getAllChlorine", {
        params: { length, width, depth, basinType }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    
    }
  }

  useEffect(()=>{
    refreshToken();
    getAllChlorine();
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
            EDIT POOL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='poolStatsList'>
            <div className='poolStat'>Price: $<input type="text" defaultValue={props.pool.pool.pool.cost}></input></div>
            <div className='poolStat'>Length: <input type="text" defaultValue={props.pool.pool.pool.length}></input>ft</div>
            <div className='poolStat'>Width: <input type="text" defaultValue={props.pool.pool.pool.width}></input>ft</div>
            <div className='poolStat'>Depth Shallow: <input type="text" defaultValue={props.pool.pool.pool.depth_shallow}></input>ft</div>
            <div className='poolStat'>Depth Deep: <input type="text" defaultValue={props.pool.pool.pool.depth_deep}></input></div>
            <div className='poolStat'>Slant Type: <input type="text" defaultValue={props.pool.pool.pool.slant_type}></input></div>
            <div className='poolStat'>Lining Type:  <select name="pool-material" value={props.pool.pool.pool.lining_type} id="pool-material">
                <option value="Gunnite">Gunnite</option>
                <option value="Vinyl">Vinyl</option>
                <option value="Fiber Glass">Fiber Glass</option>
                </select>
            </div>
            <div className='poolStat'>Cover 1: <select name="winter-cover" value={props.pool.pool.pool.cover1} id="winter-cover">
                <option value="null">None</option>
                <option value="cover2">Cover 1</option>
                <option value="cover3">Cover 2</option>
                <option value="cover4">Cover 3</option>
                </select>
            </div>
            <div className='poolStat'>Cover 2: <select name="summer-cover" value={props.pool.pool.pool.cover2} id="summer-cover">
                <option value="null">None</option>
                <option value="cover2">Cover 1</option>
                <option value="cover3">Cover 2</option>
                <option value="cover4">Cover 3</option>
                </select>
            </div>
            <div className='poolStat'>Piping: <input type="text" defaultValue={props.pool.pool.pool.piping}></input></div>
            <div className='poolStat'>Drain: <input type="text" defaultValue={props.pool.pool.pool.drain}></input></div>
            <div className='poolStat'>Skimmer: <input type="text" defaultValue={props.pool.pool.pool.skimmer}></input></div>
            <div className='poolStat'>Pump: <input type="text" defaultValue={props.pool.pool.pool.pump}></input></div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" color="success">Save Pool</Button>
        <Button variant="contained" onClick={props.onHide} color="error">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPoolItem;