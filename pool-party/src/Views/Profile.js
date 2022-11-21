/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../Modules/NavigationBar';
 
const Profile = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);

    const [newName, setNewName] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/update', {
                newName: newName,
                oldEmail: email
            });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
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
            console.log(response);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    return (
        <div className="Profile">
            <NavigationBar />
            <div className="container mt-5">
                <p className="has-text-centered">{msg}</p>

                <h2>Edit Profile:</h2>
            <form onSubmit={update}>
                <label>Username: </label>
                <input
                type="text"
                id="username"
                name="username"
                placeholder={username}
                onChange={event => setNewName(event.target.value)}
                autoComplete="off"
                />
                <br />
                <p>Email: {email}</p>
                <br />
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
        
    )
}
 
export default Profile