var express = require('express');
var bodyParser = require('body-parser');
// Create our app
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is up on port 3000');
});