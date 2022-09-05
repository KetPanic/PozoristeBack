const express = require("express");
const { sequelize, Comments, Users, Halls, Indexes, Repertoire, Reservations, Shows, Tickets, TicketTypes } = require("./models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const http = require('http');
require('dotenv').config();
const Joi = require('joi');
const { Server } = require("socket.io");
const comments = require("./models/comments");

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:8081',
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
});

var corsOptions = {
    origin: ['http://127.0.0.1:8000', 'http://127.0.0.1:8900', 'http://localhost:8081', 'http://localhost:8080'],
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


function authToken(req, res, next){
    console.log(req.headers)
    if(req.headers.authorization == null){
        return res.json({message : "Unauthenticated"})
    }

    

    const token = req.headers.authorization.split(' ')[1];

    if(token == null) return res.json({message : "Unauthenticated"})

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.json({message : "Unauthenticated"})

        req.user = user;
        
        next();
    })
}

function authorizelvl1(req, res, next){
    
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(user.type > 1){
            return res.json({message : "Unaothorized"})
        }
        req.user = user;
        next();
    })
}

function authorizelvl2(req, res, next){
    
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(user.type != 0){
            return res.json({message : "Unaothorized"})
        }
        req.user = user;
        next();
    })
}


/**
 * 
 * Halls
 * 
 */


 const hallsScheme = Joi.object().keys({
    name: Joi.string().trim().required(),
    noOfSeats: Joi.number().min(0).required()
}); 

app.get('/halls', (req, res) => {
    Halls.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/halls/:id', (req, res) => {
    Halls.findOne( {where: {id: req.params.id}} )
    .then(hall => {
        if(hall == null){
            res.status(400).json({message: "Desired hall doesn't exist"})
        }else{
            res.json(hall)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.post('/halls', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, hallsScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            Halls.create( {name: req.body.name, noOfSeats: req.body.noOfSeats} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.put('/halls/:id', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, hallsScheme, (err, result) => {
        if(err){
            res.status(400).send({message: err.details});
        }else{
            Halls.update(  {name: req.body.name, noOfSeats: req.body.noOfSeats}, {where: {id: req.params.id} } )
                .then( rows => {
                    res.json(rows) 
                })
                .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.delete('/halls/:id', authToken, authorizelvl1, (req, res) => {
    Halls.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})



/**
 * 
 * Repertoire
 * 
 */
 const repertoireScheme = Joi.object().keys({
    dateTime: Joi.date().raw().required(),
    hallId: Joi.number().min(0).required(),
    showId: Joi.number().min(0).required()
}); 

app.get('/repertoire', (req, res) => {
    Repertoire.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/repertoire/ids', (req, res) => {
    Repertoire.findAll({order: [['dateTime', 'ASC']]})
    .then(rows => {
        arr = []
        rows.forEach(r => {
            arr.push(r.id);
        })
        res.json(arr)
    })
    .catch( err =>res.status(500).json({message: err}) );
})

app.get('/repertoire/:id', (req, res) => {
    Repertoire.findOne( {where: {id: req.params.id, }, include:['show', 'hall']} )
    .then(repertoire => {
        if(repertoire == null){
            res.status(400).json({message: "Desired repertoire doesn't exist"})
        }else{
            res.json(repertoire)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );


app.post('/repertoire', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, repertoireScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            Halls.findOne({where: {id: req.body.hallId}})
            .then( hall => {
                if(hall == null){
                    res.status(400).json({message: "Referenced hall doesn't exist"})
                }else{
                    Shows.findOne({where: {id: req.body.showId}})
                    .then(show => {
                        if(show == null){
                            res.status(400).json({message: "Referenced show doesn't exist"})
                        }else{
                            
                            Repertoire.create( {dateTime: req.body.dateTime, hallId: req.body.hallId, showId: req.body.showId} )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json({message: err}));
                        }
                    })
                    .catch(err => res.status(500).json({message: err}));
                }
            })
            .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.put('/repertoire/:id', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, repertoireScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            Halls.findOne({where: {id: req.body.hallId}})
            .then( hall => {
                if(hall == null){
                    res.status(400).json({message: "Referenced hall doesn't exist"})
                }else{
                    Shows.findOne({where: {id: req.body.showId}})
                    .then(show => {
                        if(show == null){
                            res.status(400).json({message: "Referenced show doesn't exist"})
                        }else{
                            
                            Repertoire.update( {dateTime: req.body.dateTime, hallId: req.body.hallId, showId: req.body.showId}, {where: {id: req.params.id} } )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json({message: err}));
                        }
                    })
                    .catch(err => res.status(500).json({message: err}));
                }
            })
            .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.delete('/repertoire/:id', authToken, authorizelvl1, (req, res) => {
    Repertoire.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})



/**
 * 
 * Reservations
 * 
 */

 const reservationScheme = Joi.object().keys({
    noOfTickets: Joi.number().min(1).required(),
    userId: Joi.number().min(0).required(),
    ticketId: Joi.number().min(0).required()
}); 

app.get('/reservations', (req, res) => {
    Reservations.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/reservations/:id', (req, res) => {
    Reservations.findOne( {where: {id: req.params.id}} )
    .then(reservation => {
        if(reservation == null){
            res.status(400).json({message: "Desired reservation doesn't exist"})
        }else{
            res.json(reservation)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.post('/reservations', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, reservationScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            Users.findOne({where: {id: req.body.userId}})
            .then( user => {
                if(user == null){
                    res.status(400).json({message: "Referenced user doesn't exist"})
                }else{
                    Tickets.findOne({where: {id: req.body.ticketId}})
                    .then(ticket => {
                        if(ticket == null){
                            res.status(400).json({message: "Referenced ticket doesn't exist"})
                        }else if(ticket.number < req.body.noOfTickets){
                            res.status(400).json({message: "Trying to reserve more tickets than available"})
                        }else{
                            no = ticket.number - req.body.noOfTickets;
                            Tickets.update( {number:no, repertoireId: ticket.repertoirId, ticketTypeId: ticket.ticketTypeId},  {where: {id: ticket.id}} )
                            Reservations.create( {noOfTickets: req.body.noOfTickets, userId: req.body.userId, ticketId: req.body.ticketId} )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json({message: err}));
                        }
                    })
                    .catch(err => res.status(500).json({message: err}));
                }
            })
            .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.put('/reservations/:id', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, reservationScheme, (err, result) => {
        Joi.validate(req.body, reservationScheme, (err, result) => {
            if(err){
                res.status(400).json({message: err.details});
            }else{
                Users.findOne({where: {id: req.body.userId}})
                .then( user => {
                    if(user == null){
                        res.status(400).json({message: "Referenced user doesn't exist"})
                    }else{
                        Tickets.findOne({where: {id: req.body.ticketId}})
                        .then(ticket => {
                            if(ticket == null){
                                res.status(400).json({message: "Referenced ticket doesn't exist"})
                            }else{
                                
                                Reservations.update( {noOfTickets: req.body.noOfTickets, userId: req.body.userId, ticketId: req.body.ticketId}, {where: {id: req.params.id}} )
                                .then( rows => res.json(rows) )
                                .catch(err => res.status(500).json({message: err}));
                            }
                        })
                        .catch(err => res.status(500).json({message: err}));
                    }
                })
                .catch(err => res.status(500).json({message: err}));
            }
        })
    })
})

app.delete('/reservations/:id', authToken, authorizelvl1, (req, res) => {
    Reservations.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})





/**
 * 
 * Shows
 * 
 */

 const showsScheme = Joi.object().keys({
    name: Joi.string().trim().required(),
    description: Joi.string()
}); 

app.get('/shows', (req, res) => {
    Shows.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/shows/ids', (req, res) => {
    Shows.findAll()
        .then( rows => {
            arr = []
            rows.forEach(r => {
                arr.push(r.id);
            })
            res.json(arr) 
        })
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/shows/:id', (req, res) => {
    Shows.findOne( {where: {id: req.params.id}} )
    .then(show => {
        if(show == null){
            res.status(400).json({message: "Desired show doesn't exist"})
        }else{
            res.json(show)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.post('/shows', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, showsScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            Halls.create( {name: req.body.name, description: req.body.description} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.put('/shows/:id', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, showsScheme, (err, result) => {
        if(err){
            res.status(400).send({message: err.details});
        }else{
            Shows.update(  {name: req.body.name, description: req.body.description}, {where: {id: req.params.id} } )
                .then( rows => {
                    res.json(rows) 
                })
                .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.delete('/shows/:id', authToken, authorizelvl1, (req, res) => {
    Shows.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})



/**
 * 
 * Tickets
 * 
 */
 const ticketScheme = Joi.object().keys({
    number: Joi.number().min(0).required(),
    ticketTypeId: Joi.number().min(0).required(),
    repertoirId: Joi.number().min(0).required()
}); 

app.get('/tickets', (req, res) => {
    Tickets.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/tickets/:id', (req, res) => {
    Tickets.findOne( {where: {id: req.params.id}} )
    .then(ticket => {
        if(ticket == null){
            res.status(400).json({message: "Desired ticket doesn't exist"})
        }else{
            res.json(ticket)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.get('/tickets/repertoireEntry/:id', (req, res) => {
    Tickets.findAll( {where: {repertoireId: req.params.id}, include: ['ticketType'] } )
    .then(ticket => {
        if(ticket == null){
            res.status(400).json({message: "Desired ticket doesn't exist"})
        }else{
            res.json(ticket)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.post('/tickets', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, ticketScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            TicketTypes.findOne({where: {id: req.body.ticketTypeId}})
            .then( ticketType => {
                if(ticketType == null){
                    res.status(400).json({message: "Referenced ticket type doesn't exist"})
                }else{
                    Repertoire.findOne({where: {id: req.body.repertoirId}})
                    .then(repertorir => {
                        if(repertorir == null){
                            res.status(400).json({message: "Referenced repertorir doesn't exist"})
                        }else{
                            
                            Tickets.create( {number: req.body.number, ticketTypeId: req.body.ticketTypeId, repertoirId: req.body.repertoirId} )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json({message: err}));
                        }
                    })
                    .catch(err => res.status(500).json({message: err}));
                }
            })
            .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.put('/tickets/:id', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, ticketScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            TicketTypes.findOne({where: {id: req.body.ticketTypeId}})
            .then( ticketType => {
                if(ticketType == null){
                    res.status(400).json({message: "Referenced ticket type doesn't exist"})
                }else{
                    Repertoire.findOne({where: {id: req.body.repertoirId}})
                    .then(repertorir => {
                        if(repertorir == null){
                            res.status(400).json({message: "Referenced repertorir doesn't exist"})
                        }else{
                            
                            Tickets.update( {number: req.body.number, ticketTypeId: req.body.ticketTypeId, repertoirId: req.body.repertoirId}, {where: {id: req.params.id}} )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json({message: err}));
                        }
                    })
                    .catch(err => res.status(500).json({message: err}));
                }
            })
            .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.delete('/tickets/:id', authToken, authorizelvl1, (req, res) => {
    Tickets.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})


/**
 * 
 * TicketTypes
 * 
 */
 const ticketTypeScheme = Joi.object().keys({
    name: Joi.string().trim().required(),
    price: Joi.number().min(0).required()
}); 

app.get('/ticketTypes', (req, res) => {
    TicketTypes.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/ticketTypes/:id', (req, res) => {
    TicketTypes.findOne( {where: {id: req.params.id}} )
    .then(ticketType => {
        if(ticketType == null){
            res.status(400).json({message: "Desired ticket type doesn't exist"})
        }else{
            res.json(ticketType)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.post('/ticketTypes', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, ticketTypeScheme, (err, result) => {
        if(err){
            res.status(400).json({message: err.details});
        }else{
            TicketTypes.create( {name: req.body.name, price: req.body.price} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.put('/ticketTypes/:id', authToken, authorizelvl1, (req, res) => {
    Joi.validate(req.body, ticketTypeScheme, (err, result) => {
        if(err){
            res.status(400).send({message: err.details});
        }else{
            TicketTypes.update(  {name: req.body.name, price: req.body.price}, {where: {id: req.params.id} } )
                .then( rows => {
                    res.json(rows) 
                })
                .catch(err => res.status(500).json({message: err}));
        }
    })
})

app.delete('/ticketTypes/:id', authToken, authorizelvl1, (req, res) => {
    TicketTypes.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})


/**
 * 
 * Comments
 * 
 */

app.get('/comments/:id', (req, res) => {
    Comments.findAll( {where: {showId: req.params.id}} )
    .then(ticketType => {
        if(ticketType == null){
            res.status(400).json({message: "Desired ticket type doesn't exist"})
        }else{
            res.json(ticketType)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );


/**
 * 
 * Users
 * 
 */
 const userScheme = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().min(4).required(),
    name: Joi.string().trim().required(),
    surname: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    type: Joi.number().min(0).max(2).required(),
});

app.get('/users', authToken, authorizelvl2, (req, res) => {
    Users.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json({message: err}) );
} );

app.get('/users/:id',authToken, (req, res) => {
    Users.findOne( {where: {id: req.params.id}} )
    .then(ticketType => {
        if(ticketType == null){
            res.status(400).json({message: "Desired ticket type doesn't exist"})
        }else{
            res.json(ticketType)
        }
    })
    .catch( err => res.status(500).json({message: err}));
} );

app.post('/users', authToken, authorizelvl2, (req, res) => {
    Joi.validate(req.body, userScheme, (error, result) => { 
        if(error){
         res.status(400).json({message: error.details});
     }else{
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
                                 
                                 res.json(rows);
                             })
                         
                             .catch(err => res.status(500).json(err) )
                         }
                         })
                     .catch(err => res.status(500).json(err) )
                 }
             }).catch( err => res.status(500).json(err) );
 

  } })
})

app.put('/users/:id', authToken, authorizelvl2, (req, res) => {
    Joi.validate(req.body, userScheme, (error, result) => { 
        if(error){
         res.status(400).json({message: error.details});
     }else{
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
                             Users.update(obj, {where: {id: req.params.id}})
                             .then( rows => {
                                 
                                 res.json(rows);
                             })
                         
                             .catch(err => res.status(500).json(err) )
                         }
                         })
                     .catch(err => res.status(500).json(err) )
                 }
             }).catch( err => res.status(500).json(err) );
 

  } })
})


app.delete('/users/:id', authToken, authorizelvl2, (req, res) => {
    Users.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json({message: err}));
})



function authSocket(msg, next) {
    if (msg[1].token == null) {
        next(new Error("Not authenticated"));
    } else {
        jwt.verify(msg[1].token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                next(new Error(err));
            } else {
                msg[1].user = user;
                next();
            }
        });
    }
}
/*
const socket1 = require("socket.io-client")("http://127.0.0.1:8200");
socket1.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
*/
io.on('connection', socket => {
    socket.use(authSocket);
 
    socket.on('comment', msg => {
        Comments.create({ body: msg.text, userId: msg.userId, showId: msg.showId })
            .then( rows => {
                Comments.findOne({ where: { id: rows.id }, include: ['user'] })
                    .then( msg => io.emit('comment', JSON.stringify(msg)) ) 
            }).catch( err => res.status(500).json(err) );
    });

    socket.on('error', err => socket.emit('error', err.message) );
});


const port = process.env.PORT || 8200;
server.listen( {port:8200}, async() => {
    await sequelize.authenticate();
})