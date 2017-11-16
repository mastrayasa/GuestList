var express = require('express');
var bodyParser = require('body-parser');
var database = require('./database');
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


app.get('/news',function(re,res){
	 
	 database.News.findAll()
	 .then(function(articles){
	 	var data = { news: articles }
	 	res.render('news-list',data);
	 })
	 .catch(function(err){
	 	res.send(err);
	 }); 
});
 


app.get('/news/add',function(re,res){
	 
	 res.render('news-form');
});

app.post('/news/add',function(re,res){
	 
	 const project = database.News.build({
	  judul: re.body.judul,
	  isi: re.body.isi,
	  tanggal :new Date()
	});

	 project.save();


	 res.redirect('/news');
});


app.get('/news/:newsId',function(re,res){
	 


	 database.News.findById(re.params.newsId)
	 .then(function(news){
	 	
	 	console.log(news)

	 	if(!news){
	 		var data = { news: news }
	 		res.render('news-detail',data);
	 	}else{
	 		res.send("data tidak ada bos");
	 	} 
	 })
	 .catch(function(err){
	 	res.send(err);
	 }); 
});



module.exports = app;