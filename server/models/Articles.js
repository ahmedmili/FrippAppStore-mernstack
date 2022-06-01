var connection = require ('../mySql/db_Connection');
var tokenFN = require('../controller/token-dec-enc')

const header = {
  alg: "HS512",
  typ: "JWT"
};
const key = "$AhmedIsAwesome!";


function ArticleHandler() {
  
this.uploadSingle =
  function (req,fileName, res, next) {
        // ##Check for valid file extension
        // if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        //   res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
        // }else{
          console.log(req.body)
          // let token = req.headers.token
          // let decToken = tokenFN.DecodeJWT(token)
          // let user_id = decToken.result[0].Id_user

          console.log(fileName)
          const data = req.body

          const artFullData = {
            art_name : data.artName,
            art_description : data.artDisc,
            // categorie : data.categorie,
            art_state : 'pending',
            art_prix : data.artPrix,
            art_taille : data.artSize,
            art_color : data.artColor,
            art_photo : fileName,
            id_user : 3
          }
           

          // console.log(req.body)
          // console.log(req.headers.token)
          // console.log(decToken.result[0].Id_user)
          connection.acquire(function(err,con) {
            con.query('insert into article set ?',artFullData, function(err,result) {
              con.release();
              if (err) {
                console.log(err)
                res.send({status:1, message:'article creation fail'});
              } else {
                res.send({status:0, message:'article create success'});
                // console.log("Post successful");
              }
            });
          });

        // }
        
        
}

};

module.exports = new ArticleHandler();