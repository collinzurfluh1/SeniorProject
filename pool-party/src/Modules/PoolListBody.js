import React, { Component, useState } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';
import poolModel from '../Assets/poolmodel.svg';
import '../SCSS/poolListBody.scss';
import Heart from "react-heart";
import PoolItem from './PoolItem';

function PoolListBody(pool) {
    const [active, setActive] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
        return (
            <>
            
            <div id="poolListItem" onClick={(e) => {setModalShow(true) }}>
                <div className="poolListImage">
                    <img src={poolModel}></img>
                </div>
                <div className="poolListBody">
                    <div className="poolListTitle">
                        <div className='title'>
                            <h3>{pool.pool.title}</h3>
                        </div>
                        <div className="poolListActions" onClick={(e) => {setActive(!active); e.stopPropagation();}}>
                            {/* <Heart isActive={active} /> */}
                        </div>
                    </div>
        
                    <div className="poolListAuthor">
                        <p>Author: {pool.pool.owner}</p>
                    </div>
        
                    <div className="poolListContent">
                        <p>Price: ${pool.pool.cost}</p>
                        <p>Length: {pool.pool.length}ft</p>
                        <p>Width: {pool.pool.width}ft</p>
                    </div>
                </div>
            </div>
            <PoolItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            pool={pool}
            />
            </>
        );
 
}

export default PoolListBody;