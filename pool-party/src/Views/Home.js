import HomeBody from '../Modules/HomeBody';
import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import React, { Component }  from 'react';


function Home() {
  return (
    <div id="Home">
        <NavigationBar />
        <HomeBody />
        <Footer />
    </div>
  );
}

export default Home;
