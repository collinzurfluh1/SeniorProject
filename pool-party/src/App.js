import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// import Creator from './Views/Creator';
// import Login from './Views/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Creator" element={<Creator />} />
          <Route path="/Community" element={<Community />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
