import React, { useState } from 'react'
import Footer from '../Modules/Footer'
import NavigationBar from '../Modules/NavigationBar'
import RegisterBody from '../Modules/RegisterBody'

 
const Register = () => {
   
    return (
        <div id="Register">
            <NavigationBar/>
            <RegisterBody/>
            <Footer/>
        </div>
    )
}
 
export default Register