var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.set('view engine','ejs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended : true }));

app.get('/hello',function(re,res){
	res.send('Hello Word');
});

app.get('/',function(re,res){
	var data = { title : 'beranda2', projects : ['Facebook2','Instagram','Infosulteng'] };
	res.render('index',data);
});

app.get('/profile',function(re,res){
	var data = { title : 'member', projects : ['Facebook2','Instagram','Infosulteng'] };
	res.render('profile',data);
});

var guestList = [];

app.get('/guest',function(re,res){

	var data = { guestList: guestList};

	res.render('guest-form',data);
});

app.post('/guest',function(re,res){
	console.log(re.body);

	guestList.push(re.body.susu);

	res.redirect('/guest');
});



module.exports = app;