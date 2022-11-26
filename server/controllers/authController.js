import companyModel from "../models/companyModel.js";
import sellerModel from "../models/sellerModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerCompany = async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword
    const newCompany = new companyModel(req.body);
    const {email} = req.body;
    try {
        const oldCompany = await companyModel.findOne({email})
        if(oldCompany){
            return res.status(400).json({message : "Company Already Registered"})
        }

        const company = await newCompany.save()

        const token = jwt.sign({
            username: company.name, id: company._id
        }, process.env.JWT_KEY, {expiresIn: "1h"})
        res.status(200).json({company, token})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const loginCompany = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const company = await companyModel.findOne({email: email});
  
      if (company) {
        const validity = await bcrypt.compare(password, company.password);
  
        if (!validity) {
          res.status(400).json("Wrong Password or Email");
        } else {
          const token = jwt.sign(
            { username: company.username, id: company._id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({ company, token });
        }
      } else {
        res.status(404).json("Company not Found");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const registerSeller = async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newSeller = new sellerModel(req.body);
    const {email} = req.body;
    try {
        const oldSeller = await sellerModel.findOne({email})
        if(oldSeller){
            return res.status(400).json({message : "Seller Already Registered"})
        }

        const seller = await newSeller.save()

        const token = jwt.sign({
            username: seller.name, id: seller._id
        }, process.env.JWT_KEY, {expiresIn: "1h"})
        res.status(200).json({seller, token})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const loginSeller = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const seller = await sellerModel.findOne({email: email});
  
      if (seller) {
        const validity = await bcrypt.compare(password, seller.password);
  
        if (!validity) {
          res.status(400).json("Wrong Password or Email");
        } else {
          const token = jwt.sign(
            { username: seller.username, id: seller._id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({ seller, token });
        }
      } else {
        res.status(404).json("User not Found");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };