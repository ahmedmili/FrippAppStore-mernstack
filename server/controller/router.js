var todo = require('../models/test');
var Articles = require('../models/Articles');

  const multer  = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploadedImgs");
  },
  filename : (req,file,cb)=>{
    // console.log(file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,Date.now() + path.extname(file.originalname))
    // cb(null, file.fieldname + '-' + uniqueSuffix)
  },
})

const upload = multer({storage : storage })

// const upload = multer({ dest: 'uploadedImgs' })




module.exports = {
  configure: function(app) {
    app.get('/api/affiche',function(req,res) {
      todo.get(res);
    });
    app.get('/api/affiche/:id',function(req,res) {
      todo.getByID(req.params.id,res);
    });

    app.get('/api/verif/:Fname',function(req,res) {
      todo.getByName(req.params.Fname,res);
    });
    app.get('/',function(req,res) {
   todo.verfifToken(req.headers.token,res)
      // console.log(req.headers.token)
      


    });

    app.put('/api/update/:id',function(req,res) {
      todo.update(req.body.Fname,req.params.id,res);
    });


    app.post('/api/add',function(req,res) {
      todo.create(req.body,res);
    });

    app.delete('/api/delete/:id',function(req,res) {
      todo.delete(req.params.id,res);
    });
    app.post('/api/login/',function(req,res) {
      todo.login(req.body,res);
    });

    app.post('/api/addArticle',upload.single('uploadedImg'),function(req,res){
      Articles.uploadSingle(req,res)
    });
  }
};