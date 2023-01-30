import React, { Component, useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../SCSS/login.scss';

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}

function LoginBody() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const Auth = async (e) => {
      e.preventDefault();
      try {
        if(isEmailValid(emailOrUsername)){
             await axios.post('http://localhost:4000/login', {
              email: emailOrUsername,
              password: password
          });
          navigate("/");
        }
        else{
            await axios.post('http://localhost:4000/login', {
                username: emailOrUsername,
                password: password
            });
            navigate("/");
        }
         
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
  return (
    <section className="hero is-fullwidth">
    <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form onSubmit={Auth} className="box">
                        <div className='header'>
                          <h3>Login</h3>
                        </div>
                        <p className="has-text-centered error">{msg}</p>
                        <div className="field mt-5">
                            <label className="label">Email or Username</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder="Username" value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls">
                                <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5 accountQuestion">
                            <a href="/register">Dont have an account?</a>
                        </div>
                        <div className="field mt-3">
                            <button className="button is-success is-fullwidth">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default LoginBody;