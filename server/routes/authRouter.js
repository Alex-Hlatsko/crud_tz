import express from "express";
import { loginCompany, registerCompany, registerSeller, loginSeller } from "../controllers/authController.js";

const router = express.Router();

router.post('/registercompany', registerCompany);
router.post('/logincompany', loginCompany);
router.post('/registersaller', registerSeller);
router.post('/loginsaller', loginSeller);

export default router; 