const getUsers = require('./get-users');
const getUser = require('./get-user');
const loginUser = require('./login-user');

module.exports = {
    paths:{
        '/users':{
            ...getUsers
        },
        '/user/login':{
            ...loginUser
        },
        '/user/{id}':{
            ...getUser
        }
    }
}