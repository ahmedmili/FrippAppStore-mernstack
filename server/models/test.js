var connection = require ('../mySql/db_Connection');
var tokenFN = require('../controller/token-dec-enc')

const header = {
  alg: "HS512",
  typ: "JWT"
};
const key = "$AhmedIsAwesome!";

function manipul() {
  // this.get = function(res) {
  //   connection.acquire(function(err,con) {
  //     con.query('select * from 	userstable', function(err,result) {
  //       con.release();
  //       res.send(result);
  //       console.log("Get successful");
  //     });
  //   });
  // };
  // this.getByID = function(id,res) {
  //   connection.acquire(function(err,con) {
  //     con.query('select * from 	userstable where id = ?', id, function(err,result) {
  //       con.release();
  //       res.send(result);
  //       console.log("Get by ID successful");
  //     });
  //   });
  // };

  // this.getByName = function(Fname,res) {
  //   connection.acquire(function(err,con) {
  //     con.query('select * from 	userstable where LOWER(Fname) = ?', [Fname], function(err,result) {
       
  //              con.release();
  //              if(result.length){ // error
  //               return res.status(400).send({
  //                   message : 'existe acc'})
  //            }
  //     });
  //   });
  // };
  this.create = function(todo,res) {
    connection.acquire(function(err,con) {
      con.query('insert into users set ?', todo, function(err,result) {
        con.release();
        if (err) {
          console.log(err)
          res.send({status:1, message:'TODO creation fail'});
        } else {
          res.send({status:0, message:'TODO create success'});
          console.log("Post successful");
        }
      });
    });
  };
  this.update = function(todo,id,res) {
    connection.acquire(function(err,con) {
      con.query('update users set Fname = ? where id = ?', [todo, id], function(err,result) {
        con.release();
        if (err) {
          console.log(err)
          res.send({status:1, message:'TODO update fail'
          
        });
        } else {
          res.send({status:0, message:'TODO update success'});
          console.log("Put successful");
        }
      });
    });
  };

  this.delete = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('delete from userstable where id = ?', id, function(err,result) {
        con.release();
        if (err) {
          console.log(err)
          res.send({status:1, message:'TODO delete fail'});
        } else {
          res.send({status:0, message:'TODO delete success'});
          console.log("Delete successful");
        }
      });
    });
  };

  this.login = function(data,res){
    let usermail = data.email
    let password = data.password
    // console.log('login')
    connection.acquire(function(err,con) {
      let sqlQuery = "select 'Id_user','first_name','last_name','adress','email','nb_article_solded' from users where LOWER(email) = ? And password = ?"
      con.query(sqlQuery, [usermail,password], function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, err: err});
        } 

         if(result.length>0){
          var sJWT = tokenFN.GenerateJWT(header,data,key);
          res.send({result,status:2,token:sJWT})
          }else {  
            res.send({status:0, message:'wrong password/username'});
          }
      });
    });
  }
  this.verfifToken = function(data,res){
  let verifResult = tokenFN.ValidateJWT(header,data,key) 
  // let decToken = tokenFN.DecodeJWT(data)
  res.send({loggedin:verifResult})
  }
};

module.exports = new manipul();