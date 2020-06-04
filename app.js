const express = require('express');
const app = express();
const path = require('path');
const port = 9090;
const bodyParse = require('body-parser');



const customers = require('./app/customer/customerRouter');

app.use('/static', express.static(path.join(__dirname, "assests")));
app.set('view engine', 'ejs');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}));
app.use('/', customers);
app.use('/customer', customers);


app.listen(port, function() {
    console.log(port)
})