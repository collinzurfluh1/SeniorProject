import CreatorBody from '../Modules/CreatorBody';
import CreatorBodyNeedLogin from '../Modules/CreatorBodyNeedLogin';
import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import React, { Component, useEffect, useState }  from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";


function Creator(props) {
  const [username, setName] = useState('');
 
  const refreshToken = async () => {
      try {
          const response = await axios.get('http://localhost:4000/token');
          const decoded = jwt_decode(response.data.accessToken);
          setName(decoded.username);
      } catch (error) {}
  }

  useEffect(() => {
    refreshToken();
}, []);


  return (
    
    <div id="Creator">
        <NavigationBar />
        {username == null || username == "" ? <CreatorBodyNeedLogin /> : <CreatorBody username={username} />}
        <Footer />
    </div>
  );
}

export default Creator;
