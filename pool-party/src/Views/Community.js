import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import CommunityBody from '../Modules/CommunityBody';
import React, { Component }  from 'react';


function Community() {
  return (
    <div id="Community">
        <NavigationBar />
        <CommunityBody />
        <Footer />
    </div>
  );
}

export default Community;
