const express = require("express");
const {sortUsersFromList} = require('../helpers/index.js');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database
const pool = require("../db/conn");

// This is used to login the user
userRoutes.route("/user/login").post(async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    
    const [rows, meta] = await conn.query("SELECT id, name, email, role FROM User WHERE email = ? and password = ? LIMIT 1", [req.body.email, req.body.password]);
    if(rows.length > 0){
      res.json({ valid: true, message: rows[0]});
    }else {
      res.json({ valid: false, message: 'User not found.'});
    }
  } catch (err) {
    console.log("Error found", err);
    res.status(500).json('Trouble logging in the user')
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

// This section will help you get a list of all the users.
userRoutes.route("/users").get(async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    let rows = await getUsersFromDB(conn);
    let sortedRows = await sortUsersFromList(rows);

    res.json(sortedRows);
  } catch (err) {
    console.log("Error found", err);
    res.status(500).json('Trouble fetching the users')
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

// This section will help you get a single user by id
userRoutes.route("/user/:id").get(async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    
    const [rows, meta] = await conn.query("SELECT name, email, role FROM User WHERE id = ? LIMIT 1", [req.params.id]);
    
    res.json(rows[0]);
  } catch (err) {
    console.log("Error found", err);
    res.status(500).json('Trouble fetching the User Details')
  } finally {
    if (conn) conn.release(); //release to pool
  }
  
});

async function getUsersFromDB(conn){
  let sqlQuery = "Select id, name, email, role from User"

  const [rows, meta] = await conn.query(sqlQuery);
  
  return rows;
}

// async function sortUsersFromList(list) {
//   return list.sort((a, b) => a.name.localeCompare(b.name));
// }

module.exports = userRoutes;