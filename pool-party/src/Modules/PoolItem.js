import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import '../SCSS/poolitem.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";


function PoolItem(props) {
  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [waterPrice, setWaterPrice] = useState('');
  const [pumpPrice, setPumpPrice] = useState('');
  const [concretePrice, setConcretePrice] = useState('');
  const [chlorinePrice, setChlorineCost] = useState('');
  const [summercoverPrice, setSummercoverPrice] = useState('');
  const [wintercoverPrice, setWintercoverPrice] = useState('');
  const [skimmerPrice, setSkimmerPrice] = useState('');
  const [cyanuricAcidPrice, setCyanuricAcidPrice] = useState('');
  const [plasterPrice, setPlasterPrice] = useState('');
  const [rebarPrice, setRebarPrice] = useState('');
  const [steelWallingPrice, setSteelWallingPrice] = useState('');
  const [poolLiningPrice, setPoolLiningPrice] = useState('');
  const [pipesPrice, setPipesPrice] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [fiberglassPrice, setFiberglassPrice] = useState('');
  const [drainPrice, setDrainPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');



  

  const poolProps = {"owner": props.pool.pool.owner,
    "title": props.pool.pool.title,
    "original_creator": props.pool.pool.original_creator,
    "pulic": props.pool.pool.pulic,
    "concrete": props.pool.pool.concrete,
    "plaster": props.pool.pool.plaster,
    "fiberglass_shell": props.pool.pool.fiberglass_shell,
    "steel_wall": props.pool.pool.steel_wall,
    "basin_type": props.pool.pool.basin_type,
    "length": props.pool.pool.length,
    "width": props.pool.pool.width,
    "depth_shallow": props.pool.pool.depth_shallow,
    "depth_deep": props.pool.pool.depth_deep,
    "slant_type": props.pool.pool.slant_type,
    "lining_type": props.pool.pool.lining_type,
    "cover1": props.pool.pool.cover1,
    "cover2": props.pool.pool.cover2,
    "piping": props.pool.pool.piping,
    "drain": props.pool.pool.drain,
    "skimmer": props.pool.pool.skimmer,
    "pump": props.pool.pool.pump,
    "shock": props.pool.pool.shock,
    "cyanuric_acid": props.pool.pool.cyanuric_acid,
    "chlorine": props.pool.pool.chlorine,
    "cost": props.pool.pool.cost,
    "isEdit": true,
    "id": props.pool.pool.id};


  const title = poolProps.title;
  const original_creator = poolProps.original_creator;
  const pulic = poolProps.pulic;
  const concrete = poolProps.concrete;
  const plaster = poolProps.plaster;
  const fiberglass_shell = poolProps.fiberglass_shell;
  const steel_wall = poolProps.steel_wall;
  const basin_type = poolProps.basin_type;
  const length = poolProps.length;
  const width = poolProps.width;
  const depth_shallow = poolProps.depth_shallow;
  const depth_deep = poolProps.depth_deep;
  const slant_type = poolProps.slant_type;
  const lining_type = poolProps.lining_type;
  const cover1 = poolProps.cover1;
  const cover2 = poolProps.cover2;
  const piping = poolProps.piping;
  const drain = poolProps.drain;
  const skimmer = poolProps.skimmer;
  const pump = poolProps.pump;
  const shock = poolProps.shock;
  const cyanuricAcid = poolProps.cyanuricAcid;
  const chlorine = poolProps.chlorine;
  const cost = poolProps.cost;

  const getWaterCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculateWaterPrice", {
        params: { length, width, depth_shallow, depth_deep, slant_type }
      });
      const data = response.data;
      setWaterPrice(data);
      return data;

    } catch (error) {
    }
  }

  const getPoolFilterPrice = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePoolFilterPrice", {
        params: { length, width, depth_shallow, depth_deep, slant_type }
      });

      const data = response.data;
      setFilterPrice(data);
      return data;

    } catch (error) {
    }
  }

  const getFiberGlassShellCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePoolFiberglassShellPrice", {
        params: { fiberglass_shell }
      });
      const data = response.data;
      setFiberglassPrice(data);
      return data;

    } catch (error) {
    }
  }


  const getPumpCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePoolPumpPrice", {
        params: { length, width, depth_shallow, depth_deep, slant_type }
      });
      const data = response.data;
      setPumpPrice(data);
      return data;

    } catch (error) {
    }
  }

  const getSkimmerCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getSkimmerPrice", {
        params: { skimmer }
      });
      const data = response.data;
      setSkimmerPrice(data);
      return data;

    } catch (error) {
    }
  }

  const pipesCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePipesCost", {
        params: { depth_deep, length, width, piping }
      });
      const data = response.data;
      setPipesPrice(data);
      return data;

    } catch (error) {
    }
  }

  const rebarCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculateRebar", {
        params: { length, width, depth_shallow }
      });
      const data = response.data;
      setRebarPrice(data);
      return data;

    } catch (error) {
    }
  }


  const concreteCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculateConcreteCost", {
        params: { length, width, depth_shallow, depth_deep, slant_type, basin_type, concrete }
      });
      const data = response.data;
      setConcretePrice(data);
      return data;

    } catch (error) {
    }
  }

  const drainCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getDrainPrice", {
        params: { drain }
      });
      // console.log(" length: "+ length + " width: "+ width +" depth_shallow: "+ depth_shallow +" depth_deep: "+ depth_deep +" slant_type: "+ slant_type +" basin_type: "+ basin_type +" concrete: "+ concrete);
      const data = response.data;
      setDrainPrice(data);
      return data;

    } catch (error) {
    }
  }

  const chlorineCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculateChlorinePrice", {
        params: { length, width, depth_shallow, depth_deep, slant_type, chlorine }
      });
      // console.log(chlorine);
      const data = response.data;
      setChlorineCost(data);
      // console.log(data);
      return data;

    } catch (error) {
    }
  }

  const cyanuricAcidCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculateCyanuricAcidPrice", {
        params: { length, width, depth_shallow, depth_deep, slant_type, cyanuricAcid }
      });
      const data = response.data;
      setCyanuricAcidPrice(data);
      return data;

    } catch (error) {
    }
  }

  const steelwallingCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculateSteelWallingPrice", {
        params: { length, width, steel_wall }
      });
      const data = response.data;
      setSteelWallingPrice(data);
      return data;

    } catch (error) {
    }
  }

  const poolliningCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePoolLinerPrice", {
        params: { length, width, depth_shallow, depth_deep, slant_type, lining_type }
      });
      const data = response.data;
      setPoolLiningPrice(data);
      return data;

    } catch (error) {
    }
  }
  
  const wintercoverCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePoolWinterCoverPrice", {
        params: { length, width, cover1 }
      });
      const data = response.data;
      setWintercoverPrice(data);
      return data;
    } catch (error) {
    }
  }

  const summercoverCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePoolSolarCoverPrice", {
        params: { length, width, cover2 }
      });
      const data = response.data;
      setSummercoverPrice(data);
      return data;

    } catch (error) {
    }
  }

  const plasterCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/calculatePlasterCost", {
        params: { length, width, depth_shallow, depth_deep, slant_type, plaster }
      });
      const data = response.data;
      setPlasterPrice(data);
      return data;

    } catch (error) {
    }
  }

  useEffect(() => {
    const fetchCosts = async () => {
      const costs = await Promise.all([
        getWaterCost(),
        getPumpCost(),
        getSkimmerCost(),
        concreteCost(),
        chlorineCost(),
        summercoverCost(),
        wintercoverCost(),
        cyanuricAcidCost(),
        plasterCost(),
        rebarCost(),
        steelwallingCost(),
        poolliningCost(),
        pipesCost(),
        getPoolFilterPrice(),
        getFiberGlassShellCost(),
        drainCost()
      ]);
      setTotalPrice(costs.reduce((acc, cost) => acc + cost, 0).toFixed(2));
    };
    refreshToken();
    fetchCosts();
  }, []);
      

   const savePool = async (e) => {
    e.preventDefault();
    try {
        var title = prompt('Please title your new pool')
        if(title != null && title != ""){
          await axios.post('http://localhost:4000/savePools', {
          owner: props.username,
          title: title,
          original_creator: false,
          pulic: true,
          length: props.pool.pool.length,
          width: props.pool.pool.width,
          depth_shallow: props.pool.pool.depth_shallow,
          depth_deep: props.pool.pool.depth_deep,
          slant_type: props.pool.pool.slant_type,
          lining_type: props.pool.pool.lining_type,
          cover1: props.pool.pool.cover1,
          cover2: props.pool.pool.cover2,
          piping: props.pool.pool.piping,
          drain: props.pool.pool.drain,
          skimmer: props.pool.pool.skimmer,
          pump: props.pool.pool.pump,
          cost: props.pool.pool.cost,
        });
        alert("Your new pool is now saved!")
        navigate('/My-Pools');
        window.location.reload(false);
      }

    } catch (error) {
      alert("Sorry the pool was not able to be saved! Try again later!");
    }
}

const deletePool = async (e) => {
  e.preventDefault();
  try {
      var areyousure = prompt('Are you sure you want to delete '+title+"? If so type YES.")
      if(areyousure == "YES"){
        try {
          await axios.post('http://localhost:4000/deletePools', {
            id: props.pool.pool.id
          });
          alert(title + " has been deleted!");
          window.location.reload(false);
        } catch (error) {
          console.error(error);
          alert("Error deleting pool");
        }
      }

    } catch (error) {
      alert("Sorry the pool was not able to be deleted! Try again later!");
    }
}

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
    } catch (error) {}
  }

  const editPool = () =>{
    navigate('/creator', { state: { poolProps: poolProps } });
  }

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
        <h3>Pool Stats:</h3>
        <div className='poolStatsList'>
            <div className='poolStat'>Price: ${totalPrice == null ?
          "N/A"
        : totalPrice}</div>
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
            <div className='poolStat'>Basin: {props.pool.pool.basin_type == null ?
          "N/A"
        : props.pool.pool.basin_type}</div>
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
        <div className='poolStat'>Chlorine: {props.pool.pool.chlorine == null ?
          "N/A"
        : props.pool.pool.chlorine}</div>
            {/* <div className='poolStat'>Pump: {props.pool.pool.pump == null ?
          "N/A"
        : props.pool.pool.pump}</div> */}
      </div>
      <h3>Costs:</h3>
      <div className='poolStatsList'>
        <div className='poolStat'>Water: ${parseFloat(waterPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(waterPrice).toFixed(2)}</div>
        <div className='poolStat'>Pump: ${parseFloat(pumpPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(pumpPrice).toFixed(2)}</div>
        <div className='poolStat'>Filter: ${parseFloat(filterPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(filterPrice).toFixed(2)}</div>
        <div className='poolStat'>Skimmer: ${parseFloat(skimmerPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(skimmerPrice).toFixed(2)}</div>
          <div className='poolStat'>Drain: ${parseFloat(drainPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(drainPrice).toFixed(2)}</div>
        <div className='poolStat'>Summer Cover: ${parseFloat(summercoverPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(summercoverPrice).toFixed(2)}</div>
        <div className='poolStat'>Winter Cover: ${parseFloat(wintercoverPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(wintercoverPrice).toFixed(2)}</div>
        <div className='poolStat'>Concrete: ${parseFloat(concretePrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(concretePrice).toFixed(2)}</div>
        <div className='poolStat'>Plaster: ${parseFloat(plasterPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(plasterPrice).toFixed(2)}</div>
        <div className='poolStat'>Chlorine: ${parseFloat(chlorinePrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(chlorinePrice).toFixed(2)}</div>
        <div className='poolStat'>CyanuricAcid: ${parseFloat(cyanuricAcidPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(cyanuricAcidPrice).toFixed(2)}</div>
        <div className='poolStat'>Rebar: ${parseFloat(rebarPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(rebarPrice).toFixed(2)}</div>
        <div className='poolStat'>Steel Walling: ${parseFloat(steelWallingPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(steelWallingPrice).toFixed(2)}</div>
        <div className='poolStat'>Pool Liner: ${parseFloat(poolLiningPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(poolLiningPrice).toFixed(2)}</div>
        <div className='poolStat'>Pipes: ${parseFloat(pipesPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(pipesPrice).toFixed(2)}</div>
        <div className='poolStat'>Fiberglass: ${parseFloat(fiberglassPrice).toFixed(2) == undefined ?
          "N/A"
        : parseFloat(fiberglassPrice).toFixed(2)}</div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        {props.pool.pool.owner == username ?
          // <Button variant="contained" color="primary" onClick={(e) => {setModalShow(true) }}>Edit Pool</Button>
          <>
            <Button variant="contained" color="error" onClick={deletePool}>Delete Pool</Button>
            <Button variant="contained" color="primary" onClick={editPool}>Edit Pool</Button>
          </>
        : <Button variant="contained" color="success" onClick={savePool} >Save Pool</Button>}
        <Button variant="contained" onClick={props.onHide} color="error">Close</Button>
      </Modal.Footer>
      {/* <EditPoolItem
      show={modalShow}
      onHide={() => setModalShow(false)}
      pool={props}
      /> */}
    </Modal>
  );
}

export default PoolItem;