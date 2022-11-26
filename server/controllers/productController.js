import mongoose from "mongoose";
import productModel from "../models/productModel.js";

export const createProduct = async(req, res) => {
    const newProduct = new productModel(req.body)

    try {
        await newProduct.save()
        res.status(200).json("Product created")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getProduct = async(req, res) => {
    const id = req.params.id

    try {
        const product = await productModel.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateProduct = async(req, res) => {
    const {isAdmin} = req.body;
    const productId = req.params.id;

    try {
        const product = await productModel.findById(productId);
        if(isAdmin){
            await productModel.updateOne({ $set: req.body })
            res.status(200).json("Product updated")
        } else {
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteProduct = async(req, res) => {
    const productId = req.params.id;
    const {isAdmin} = req.body;

    try {
        const product = await productModel.findById(productId)
        if(isAdmin){
            await product.deleteOne()
            res.status(200).json("Product deleted")
        } else {
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const followProduct = async(req,res) => {
    const productId = req.params.id;
    const {companyId} = req.body;
    
    try {
        const product = await productModel.findById(productId)

        if(!product.follow_companies.includes(companyId)){
            await productModel.updateOne({$push : {follow_companies: companyId}})
            res.status(200).json("Product follow")
        } else {
            await productModel.updateOne({$pull: {follow_companies: companyId}})
            res.status(200).json("Product unfollow")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}