const	express		= require('express'),
       	app 		= express(),
	bodyParser 	= require('body-parser'),
	util 		= require('util'),
	fs  		= require('fs');

//listen to all IPv4 adderesses
const hostname = '0.0.0.0';

// create writestream object
const wstream = fs.createWriteStream('callback_data.csv', { 
    'flags': 'a'})

// support parsing of application/json type post data
app.use(
    bodyParser.json({limit: '1000mb'})
);

app.get('/', function(req, res) {
    res.send('Server is running!');
})

app.post('/', function(req, res) {
    wstream.write(JSON.stringify(req.body));
    wstream.write('\n');
    console.log(req.body);
    res.send("response");
})

app.listen(8080, hostname);
