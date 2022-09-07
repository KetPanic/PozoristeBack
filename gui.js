const express = require("express");
const admin = require('./routes/admin');
const path = require('path')

const history = require('connect-history-api-fallback');

const app = express();
app.use('/admin', admin);

/*
app.get('/', (req, res) => {
    res.redirect('/admin');
})
*/

const staticMdl = express.static(path.join(__dirname, 'dist'));

app.use(staticMdl);
app.use(history({index: '/index.html'}));
app.use(staticMdl);


app.use(express.static(path.join(__dirname, 'static')));
app.listen( {port:process.env.PORT || 8900}, async() => {
})