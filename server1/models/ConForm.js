
const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject:String,
  message:String
});
module.exports = mongoose.model("User", userschema);