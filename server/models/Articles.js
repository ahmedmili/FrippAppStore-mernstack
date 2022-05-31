var connection = require ('../mySql/db_Connection');

function ArticleHandler() {
  
this.uploadSingle =
  function (req, res, next) {
        // ##Check for valid file extension
        // if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        //   res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
        // }else{

          console.log(req.body)
          console.log(req.headers.tokrn)
          // connection.acquire(function(err,con) {
          //   con.query('insert into article set ?', todo, function(err,result) {
          //     con.release();
          //     if (err) {
          //       console.log(err)
          //       res.send({status:1, message:'TODO creation fail'});
          //     } else {
          //       res.send({status:0, message:'TODO create success'});
          //       console.log("Post successful");
          //     }
          //   });
          // });

        // }
        
        
}

};

module.exports = new ArticleHandler();