const { Router } = require('express');
const express = require('express');
const { append } = require('express/lib/response');
const path = require('path')
const jwt = require('jsonwebtoken')
const admin = express.Router(); 
admin.use(express.json());
admin.use(express.urlencoded( {extended:true} ));
require('dotenv').config();

const users = require('./users');

admin.use('/users', users);


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
        }

        req.user = user;
        next();
    })
}



admin.get('/login', (req, res) => {
    
    const cookies = getCookies(req);
    const token = cookies['token'];

    if(token == null){
        res.sendFile('login.html', {root: './static'} );
    }else{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err){
    res.sendFile('login.html', {root: './static'} );
            } else{
                if(user.type == 2) {
                    res.sendFile('logout.html', {root: './static'} );
                }else{
                res.redirect('/')
                }
            } 

    })
    }
})

admin.get('/logout', (req, res) => {
    res.sendFile('logout.html', {root: './static'} );
})

admin.get('/', authToken, (req, res) => {
    res.sendFile('index.html', {root: './static'} );
})


admin.use(express.static(path.join(__dirname, 'static')));

module.exports = admin; 