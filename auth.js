const express = require("express");
const { sequelize, Users } = require("./models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const Joi = require('joi');

const app = express();

var corsOptions = {
    origin: ['http://127.0.0.1:8200', 'http://127.0.0.1:8900', 'http://127.0.0.1:8081'],
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


const registerSchema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().min(4).required(),
    name: Joi.string().trim().required(),
    surname: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    type: Joi.number().min(0).max(2).required(),
});



app.post('/register', (req, res) => {
   Joi.validate(req.body, registerSchema, (error, result) => { 
       if(error){
        res.status(400).send(error.details);
    }else{
        if(req.body.type == 2){
            const obj = {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                type: req.body.type,
                password: bcrypt.hashSync(req.body.password, 10)
            };

            Users.findOne({where: {username: req.body.username}})
            .then( user => {
                if(user != null){
                    res.status(400).json({ message: "Username already exists" });
                }else{
                    Users.findOne({where: {email: req.body.email}})
                    .then( u => {
                        if(u != null){
                            res.status(400).json({ message: "Email already exists" });
                        }else{
                            Users.create(obj)
                            .then( rows => {
                                const usr = {
                                    id: rows.id,
                                    username: rows.username,
                                    type: rows.type
                                };

                                const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

                                console.log(token);
                                
                                res.json({ token: token, id:obj.id });
                            })
                        
                            .catch(err => res.status(500).json(err) )
                        }
                        })
                    .catch(err => res.status(500).json(err) )
                }
            }).catch( err => res.status(500).json(err) );


        }else{
            res.status(400).json({ message: "Unauthorized" });
        }
 } })
}); 



const loginSchema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().min(4).required(),
});



app.post('/login', (req, res) => {
    Joi.validate(req.body, loginSchema, (error, result) => { if(error){
        res.status(400).send(error.details);
    }else{
        Users.findOne({ where: { username: req.body.username } })
            .then( usr => {
                if(usr == null){
                    res.status(400).json({ message: "Invalid username"});
                }else if (bcrypt.compareSync(req.body.password, usr.password)) {
                    const obj = {
                        id: usr.id,
                        username: usr.username,
                        type: usr.type
                    };
            
                    const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
                    
                    res.json({ token: token, id:obj.id });
                } else {
                    res.status(400).json({ message: "Invalid password"});
                }
            })
            .catch( err => res.status(500).json(err) );
     } })
});




app.listen( {port:8000}, async() => {
    await sequelize.authenticate();
})