import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigation } from 'react-router-dom';
import '../SCSS/navigation.scss';
function NavigationBar() {

  useEffect(() => {
    refreshToken();
}, []);


  const [username, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);
  var isLoggedIn = false;

  if({loggedIn}.loggedIn == true){
    isLoggedIn = true;
  }
  else {
    isLoggedIn = false;
  }

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
        setExpire(decoded.exp);
        setLoggedIn(response.request.withCredentials);

    } catch (error) {
    }
}
 
  const Logout = async () => {
      try {
          await axios.delete('http://localhost:4000/logout');
          window.location.reload(false);
      } catch (error) {
      }
  }

  return (
    <div id="Navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Home">Pool Party</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Creator">Creator</Nav.Link>
            <Nav.Link href="/Community">Community</Nav.Link>
        </Nav>
          <Nav>
          { isLoggedIn ?  <NavDropdown title={username} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/My-Pools">My Pools</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={Logout}>
                            Logout
                            </NavDropdown.Item>
                          </NavDropdown>
               : 
                <><Nav.Link href="/Login">Login</Nav.Link><Nav.Link href="/Register">Register</Nav.Link></>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavigationBar;