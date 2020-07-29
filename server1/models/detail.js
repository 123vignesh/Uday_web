var mongoose = require('mongoose'); 

var imageSchema = new mongoose.Schema({ 
	name: String, 
	desc: String, 
	image:String
}); 

//Image is a model which has a schema imageSchema 

module.exports = new mongoose.model('Image', imageSchema); 

//bro no need to push leav it we will work together in your computer?
// ok bro
//run 