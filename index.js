var app = require('./src/app');

var PORT = 4000;

app.listen(PORT, function(){
	console.log('running on :' + PORT);
});