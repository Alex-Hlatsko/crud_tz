import productModel from '../models/productModel.js'

export const createProduct = async(req, res) => {
    const newProduct = new productModel(req.body);
    try {
        const product = await newProduct.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}
