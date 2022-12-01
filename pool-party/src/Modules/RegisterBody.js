import React, { Component, useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../SCSS/register.scss';
function RegisterBody() {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/users', {
                username: username,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/login");
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
                    <form onSubmit={Register} className="box">
                        <div className='header'>
                          <h3>Register</h3>
                        </div>
                        <p className="has-text-centered error">{msg}</p>

                        <div className="field mt-5">
                            <label className="label">Username</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder="Username"
                                    value={username} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Email</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls">
                                <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Confirm Password</label>
                            <div className="controls">
                                <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5 accountQuestion">
                            <a href="/login">Already have an account?</a>
                        </div>
                        <div className="field mt-3">
                            <button className="button is-success is-fullwidth">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default RegisterBody;
