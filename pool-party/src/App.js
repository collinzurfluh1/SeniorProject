import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  Navigate
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import axios from "axios";
import Home from './Views/Home';
import Login from "./Views/Login";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import Profile from "./Views/Profile";
import Creator from "./Views/Creator";
import Community from "./Views/Community";
import SavedPools from './Views/SavedPools';
import { motion, AnimatePresence } from "framer-motion";


const blackBox = {
  initial: {
    height: "100vh",
  },
  animate: {
    height:0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
     <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
    >
    </motion.div>   
    </div>
  );
};

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <InitialTransition />
      <Router>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Creator" element={<Creator />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Saved-Pools" element={<SavedPools />} />
          </Route>
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
