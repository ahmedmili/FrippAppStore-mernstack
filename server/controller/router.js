var todo = require('../models/test');
var Articles = require('../models/Articles');
var fileName = ''
  const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploadedImgs");
  },
  filename : (req,file,cb)=>{
    // console.log(file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    fileName =Date.now() + path.extname(file.originalname)
    cb(null,fileName)
    
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
      // console.log(req.headers.token)
   todo.verfifToken(req.headers.token,res)
    });
    app.get('/getArticles',function(req,res) {
      // console.log(req.headers.token)
   todo.getArticles(res)
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
      if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})}else{
             Articles.uploadSingle(req,fileName,res)
        }
   
    });
  }
};