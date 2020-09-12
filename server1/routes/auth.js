const router = require("express").Router();
const Person= require("../models/detail");

 const {registerValidation,loginValidation}=require("./validation")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





module.exports=router;