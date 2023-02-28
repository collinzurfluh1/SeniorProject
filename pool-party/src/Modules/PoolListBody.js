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
    console.log(pool);
        return (
        
            <>
            
            <div id="poolListItem" onClick={(e) => {setModalShow(true) }}>
                <div className="poolListImage">
                    <img src={poolModel}></img>
                </div>
                <div className="poolListBody">
                    <div className="poolListTitle">
                        <div className='title'>
                            <h3>title</h3>
                        </div>
                        <div className="poolListActions" onClick={(e) => {setActive(!active); e.stopPropagation();}}>
                            {/* <Heart isActive={active} /> */}
                        </div>
                    </div>
        
                    <div className="poolListAuthor">
                        <p>Author: {pool.owner}</p>
                    </div>
        
                    <div className="poolListContent">
                        <p>Price: {pool.cost}</p>
                        <p>Length: {pool.length}</p>
                        <p>Width: {pool.width}</p>
                        <p>Depth Shallow: {pool.depth_shallow}</p>
                        <p>Depth Deep: {pool.depth_deep}</p>
                        <p>Slant Type: {pool.slant_type}</p>
                        <p>Lining Type: {pool.lining_type}</p>
                        <p>Cover 1: {pool.cover1}</p>
                        <p>Cover 2:{pool.cover2}</p>
                        <p>Piping: {pool.piping}</p>
                        <p>Drain: {pool.drain}</p>
                        <p>Skimmer: {pool.skimmer}</p>
                        <p>Pump: {pool.pump}</p>

                    </div>
                </div>
            </div>
            <PoolItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            </>
        );
 
}

export default PoolListBody;