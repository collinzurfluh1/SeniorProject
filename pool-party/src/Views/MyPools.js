import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import React from 'react'

import CommunityBody from '../Modules/CommunityBody';
import MyPoolHeader from '../Modules/MyPoolHeader';


function MyPools() {
  return (
    <div id="Community">
        <NavigationBar />
        <MyPoolHeader />
        <CommunityBody />
        <Footer />
    </div>
  );
}

export default MyPools;
