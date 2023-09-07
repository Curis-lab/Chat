const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const registerUser = async(req, res)=>{
    try{
        const {name, email, password} = req.body;
    
        let user = await userModel.findOne({email});

        if(user) return res.status(400).json('user with the given email already exist....');
        
        if(!name || !email || !password) return res.status(400).json('We did not get any email and passwrod');
        
        if(!validator.isEmail(email)) return res.status(400).json('Email number is correct');
        
        if(!validator.isStrongPassword(password)) return res.status(400).json('Password must be a strong passwrod');

        user = new userModel({name, email, password});

        await user.save()
        .then(()=>console.log('success save'))
        .catch((error)=>console.log(error));
        
        res.status(200).json({_id: user.id, name, email, password});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    };
};

module.exports = {registerUser}