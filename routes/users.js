const { Router } = require('express');
const express = require('express');
const { append } = require('express/lib/response');
const path = require('path')
const jwt = require('jsonwebtoken')
const users = express.Router(); 
users.use(express.json());
users.use(express.urlencoded( {extended:true} ));
require('dotenv').config();



function getCookies(req){
    if(req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split(': ');
    const parseCookies = {};

    rawCookies.forEach( cookie => {
        const pc = cookie.split('=');
        parseCookies[pc[0]] = pc[1]
    });

    return parseCookies;
}

function authToken(req, res, next){
    const cookies = getCookies(req);
    const token = cookies['token'];

    if(token == null) return res.redirect('/admin/login')

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.redirect('/admin/login')

        if(user.type == 2) {
            return res.redirect('/admin/logout')
        }else if(user.type == 1){
            return res.redirect('/admin/')
        }

        req.user = user;
        next();
    })
}

users.get('/', authToken, (req, res) => {
    res.sendFile('allUsers.html', {root: './static/users'} );
})

users.get('/delete', authToken, (req, res) => {
    res.sendFile('deleteUser.html', {root: './static/users'} );
})

users.get('/update', authToken, (req, res) => {
    res.sendFile('updateUser.html', {root: './static/users'} );
})

users.get('/view', authToken, (req, res) => {
    res.sendFile('viewUser.html', {root: './static/users'} );
})

users.get('/new', authToken, (req, res) => {
    res.sendFile('newUser.html', {root: './static/users'} );
})

users.use(express.static(path.join(__dirname, 'static/users')));

module.exports = users;