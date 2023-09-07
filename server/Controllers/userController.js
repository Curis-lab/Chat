const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const registerUser = async(req, res)=>{
    const {name, email, password} = req.body;
    let user = await userModel.findOne({email});

    if(user) return res.status(400).json('user with the given email already exist....');
}

module.exports = {registerUser}