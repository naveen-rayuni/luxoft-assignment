const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER, 
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME, 
  connectionLimit: 5,
  metaAsArray:true});

// here we are exposing the ability to creating new connections
module.exports={
    getConnection: function(){
      return new Promise(function(resolve,reject){
        pool.getConnection().then(function(connection){
          resolve(connection);
        }).catch(function(error){
          reject(error);
        });
      });
    }
  }