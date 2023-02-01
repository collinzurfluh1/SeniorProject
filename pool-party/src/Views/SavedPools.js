import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import React from 'react'

import CommunityBody from '../Modules/CommunityBody';
import SmallHeader from '../Modules/SmallHeader';


function SavedPools() {
  return (
    <div id="Community">
        <NavigationBar />
        <SmallHeader />
        <CommunityBody />
        <Footer />
    </div>
  );
}

export default SavedPools;
