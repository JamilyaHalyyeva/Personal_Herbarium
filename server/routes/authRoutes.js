import express from "express";
import { handleLogin, handleRegister } from "../controllers/authController.js";


const router = express.Router();
router.post("/register", handleRegister);
router.post("/login", handleLogin);

export default router;