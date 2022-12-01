import express from "express";
import { getUsers, Register, Login, Logout, UpdateUsername, UpdateEmail } from "../Controllers/Users.js";
import "../Controllers/Materials.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
import { refreshToken } from "../Controllers/RefreshToken.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/updateUsername', UpdateUsername);
router.post('/updateEmail', UpdateEmail);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;