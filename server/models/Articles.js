var connection = require ('../mySql/db_Connection');

function ArticleHandler() {
  
this.uploadSingle =
  function (req, res, next) {
        // ##Check for valid file extension
        // if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        //   res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})};
        
          connection.acquire(function(err,con) {
          con.query('select * from 	userstable', function(err,result) {
          con.release();
          res.send(result);
          console.log("Get successful");
          });
          });
}

};

module.exports = new ArticleHandler();