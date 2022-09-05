const express = require("express");
const admin = require('./routes/admin');
const path = require('path')

const app = express();
app.use('/admin', admin);

app.get('/', (req, res) => {
    res.redirect('/admin');
})



app.use(express.static(path.join(__dirname, 'static')));
app.listen( {port:process.env.PORT || 8900}, async() => {
})