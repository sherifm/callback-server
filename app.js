const	express = require('express'),
       	app = express(),
	bodyParser = require('body-parser'),
	util = require('util');

// support parsing of application/json type post data
app.use(
    bodyParser.json({limit: '1000mb'})
);

//support parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ 
//    extended: true 
//}));

app.get('/', function(req, res) {
    res.send('Server is running!');
})

app.post('/', function(req, res) {
    console.log(req.body);
    res.send("response");
})

app.listen(8080, '172.31.46.42');
