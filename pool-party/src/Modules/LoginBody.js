import React, { Component, useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../SCSS/login.scss';
function LoginBody() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const Auth = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:4000/login', {
              email: email,
              password: password
          });
          navigate("/");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }
  return (
    <section className="hero is-fullheight is-fullwidth">
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
                                <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
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