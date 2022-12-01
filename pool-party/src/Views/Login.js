import React, { useState } from 'react'
import Footer from '../Modules/Footer';
import LoginBody from '../Modules/LoginBody';
import NavigationBar from '../Modules/NavigationBar';

const Login = () => { 
    return (
        <div id='Login'>
            <NavigationBar/>
            <LoginBody/>
        </div>
    )
}
 
export default Login