import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import React from 'react'

import MyPoolBody from '../Modules/MyPoolBody';
import MyPoolHeader from '../Modules/MyPoolHeader';


function MyPools() {

  return (
    <div id="Community">
        <NavigationBar />
        <MyPoolHeader />
        <MyPoolBody />
        <Footer />
    </div>
  );
}

export default MyPools;
