var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var feelings = require('./routes/feelings');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname,'./client/dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, './client/dist')));



// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', feelings);

//app.listen(port, function() {
//	console.log('Server started on Port: ' + port);
//});

function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './client/dist/' });
}

app.use(redirectRouterLessonUnmatched);

if (app.get('env') === 'development')
	{
	app.listen(3000, function () {
		console.log('Example app listening on port 3000!');
	});
}
	else{
		app.listen(8080, function () {
			console.log('Example app listening on port 8080!');
		});
}

module.exports = app;