const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5555;
app.use(cors());
app.use(express.json());

const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');

app.use(require("./routes/user"));
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

// get driver connection
const pool = require("./db/conn");
 
app.listen(port, () => {
  
    pool.getConnection()
        .then(conn => {
        
        let tbl_sql = "CREATE TABLE User (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), role VARCHAR(255))";
        
        conn.query('DROP TABLE IF EXISTS User;')
            .then(() => {
            return conn.query(tbl_sql);
            })
            .then(() => {
            console.log('table created'); 
            return conn.batch("INSERT INTO User(name, email, password, role) VALUES (?, ?, ?, ?)",[
                ['James', 'James@123.com', '1!23#4', 'EMPLOYEE'],
                ['Peter', 'Peter@123.com', '8^23!3', 'EMPLOYEE'],
                ['John', 'John@123.com', '98!891', 'ADMIN'],
                ['Fred', 'Fred@123.com', '68651', 'ADMIN']
            ]);
            })
            .then((res) => {
            // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
            conn.end();
            })
            .catch(err => {
            //handle error
            console.log(err); 
            conn.end();
            })
            
        }).catch(err => {
        //not connected
        });
  console.log(`Server is running on port: ${port}`);
});