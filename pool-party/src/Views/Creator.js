import CreatorBody from '../Modules/CreatorBody';
import NavigationBar from '../Modules/NavigationBar';
import Footer from '../Modules/Footer';
import React, { Component }  from 'react';

function Creator() {
  return (
    <div id="Creator">
        <NavigationBar />
        <CreatorBody />
        <Footer />
    </div>
  );
}

export default Creator;
