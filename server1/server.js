var express = require('express');
var multer = require('multer'),
 bodyParser = require('body-parser'),
 path = require('path');
var mongoose = require('mongoose');
var imgModel = require('./models/detail'); 
var fs = require('fs');
var dir = './uploads';
var cors = require('cors');
const formidable = require("formidable");
const imgbb = require("imgbb-uploader");
/*var upload = multer({ dest: 'uploads/' });*/

mongoose.connect('mongodb://localhost:27017/udayDB', 
  { useNewUrlParser: true, useUnifiedTopology: true }, err => { 
      console.log('connected') 
  }); 

var storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
      cb(null, 'uploads') 
  }, 
  filename: (req, file, cb) => { 
      cb(null, file.fieldname + '-' + Date.now()) 
  } 
}); 


var upload = multer({ storage: storage }); 


var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('uploads'));

app.get('/', (req, res) => { 
  imgModel.find({}, (err, items) => { 
      if (err) { 
          console.log(err); 
      } 
      else { 
          res.render('index', { items: items }); 
      } 
  }); 
}); 

app.get("/images", async function(req,res){
  const image =await imgModel.find({image:1});
  res.send(image);
});


// Uploading the image 
// app.post('/', upload.single('image'), (req, res, next) => { 

// 	var obj = { 
// 		name: req.body.name, 
// 		desc: req.body.desc, 
// 		img: { 
// 			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
// 			contentType: 'image/png'
// 		} 
// 	} 
// 	imgModel.create(obj, (err, item) => { 
// 		if (err) { 
// 			console.log(err); 
// 		} 
// 		else { 
// 			// item.save(); 
// 			res.redirect('/'); 
// 		} 
// 	}); 
// }); 




app.post('/', (req, res) => {

  console.log(req.body);
  let form = new formidable.IncomingForm();

  form.keepExtensions = true;


  form.parse(req, async(err, fields, file) => {

      try {
          if (err) {
              return res.status(400).json({
                  error: "Incompatible Image",
              });
          }

          const {
              name,
              desc
          } = fields;
          
         

          console.log(name, desc, file.image);
          if (!name || !desc  || !file.image) {
              return res.status(400).json({
                  message: "One or more required fields are missing!"
              })
          }

          let new_product = new imgModel(fields);
          

          if (file.image) {
              console.log("processing image!");
              if (file.image.size > 9000000) {
                  return res.status(400).json({
                      error: "File size too big. Should be below 9 MB",
                  });
              }
              console.log(file.image.path);
              const image = await imgbb("a329575c4794db2648963936313a7093", file.image.path);
              console.log(image);
              new_product.image = image.display_url;

              console.log(new_product);
              const product = await new_product.save();

              return res.json({
                  message: "Post added successfully.",
                  product
              });
          }
      } catch (err) {
          console.error(err);
          res.status(500).send({
              msg: "Internal Server Error!"
          })
      }
  })

  console.log("out of form");
})





var port = 2000;
app.listen( port, function(){ console.log('listening on port '+port); } );


