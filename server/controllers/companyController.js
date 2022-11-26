import mongoose from "mongoose";
import companyModel from "../models/companyModel.js";

export const createCompany= async(req, res) => {
    const newCompany= new companyModel(req.body);
    const {isAdmin} = req.body;

    try {
        if(isAdmin){
            await newCompany.save()
            res.status(200).json("Company created")
        } else {
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getCompany = async(req, res) => {
    const id = req.params.id

    try {
        const companny = await companyModel.findById(id)
        res.status(200).json(companny)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateCompany = async(req, res) => {
    const {isAdmin} = req.body;

    try {
        if(isAdmin){
            await companyModel.updateOne({ $set: req.body })
            res.status(200).json("Company updated")
        } else {
            res.status(403).json("Company forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteCompany = async(req, res) => {
    const {isAdmin} = req.body;

    try {
        const company = await companyModel.findById(postId)
        if(isAdmin){
            await company.deleteOne()
            res.status(200).json("Company deleted")
        } else {
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}