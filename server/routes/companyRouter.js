import express from "express";
import { createCompany, deleteCompany, getCompany, updateCompany } from "../controllers/companyController.js";

const router = express.Router();

router.get('/', createCompany);
router.get('/:id', getCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router; 