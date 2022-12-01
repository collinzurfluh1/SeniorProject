/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Modules/NavigationBar';
import '../SCSS/profile.scss';
 
const Profile = () => {
    const [username, setName] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [id, setId] = useState('');


    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();

        if(newUsername != username && newUsername != ""){
            try {
                await axios.post('http://localhost:4000/updateUsername', {
                    newName: newUsername,
                    id: id,
                });
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        if (newEmail != email && newEmail != ""){
            try {
                await axios.post('http://localhost:4000/updateEmail', {
                    newEmail: newEmail,
                    id: id,
                });
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
    }


 
    useEffect(() => {
        refreshToken();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:4000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.username);
            setEmail(decoded.email);
            setExpire(decoded.exp);
            setId(decoded.userId);
        } catch (error) {
            if (error.response) {
                navigate("/");
            }
        }
        
    }
 
    
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:4000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.username);
            setEmail(decoded.email);
            setId(decoded.id);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    return (
        <div id="Profile">
            <NavigationBar />
            <section className="hero is-fullheight is-fullwidth">
    <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-10-desktop">
                    <form onSubmit={update} className="box">
                        <div className='header'>
                          <h3>Edit Profile</h3>
                        </div>
                        <p className="has-text-centered error">{msg}</p>
                        <div className="field mt-5">
                            <label className="label">Username</label>
                            <div className="controls">
                            <input
                            className='input'
                            type="text"
                            id="username"
                            name="username"
                            placeholder={username}
                            onChange={event => setNewUsername(event.target.value)}
                            autoComplete="off"
                            />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Email</label>
                            <div className="controls">
                                <input className='input'
                            type="text"
                            id="email"
                            name="email"
                            placeholder={email}
                            onChange={event => setNewEmail(event.target.value)}
                            autoComplete="off"/>
                            </div>
                        </div>
                        <div className="field mt-3">
                            <button className="button is-success is-fullwidth">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
        
    )
}
 
export default Profile