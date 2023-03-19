import React, { Component, useState, useEffect } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';
import poolModel from '../Assets/poolmodel.svg';
import '../SCSS/poolListBody.scss';
import Heart from "react-heart";
import PoolItem from './PoolItem';
import axios from 'axios';
import jwt_decode from "jwt-decode";

function PoolListBody(pool) {
    const [active, setActive] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [username, setName] = useState('');

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
            <>
            
            <div id="poolListItem" onClick={(e) => {setModalShow(true) }}>
                <div className="poolListImage">
                    <img src={poolModel}></img>
                </div>
                <div className="poolListBody">
                    <div className="poolListTitle">
                        <div className='title'>
                            <h5>{pool.pool.title}</h5>
                        </div>
                        <div className="poolListActions" onClick={(e) => {setActive(!active); e.stopPropagation();}}>
                            {/* <Heart isActive={active} /> */}
                        </div>
                    </div>
        
                    <div className="poolListAuthor">
                        <p>Owner: {pool.pool.owner}</p>
                    </div>
        
                    <div className="poolListContent">
                        <p>Basin Type: {pool.pool.basin_type}</p>
                        <p>Length: {pool.pool.length}ft</p>
                        <p>Width: {pool.pool.width}ft</p>

                    </div>
                </div>
            </div>
            <PoolItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            pool={pool}
            username={username}
            />
            </>
        );
 
}

export default PoolListBody;