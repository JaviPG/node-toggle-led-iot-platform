var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cons = require('consolidate');
var swig = require('swig');
var path = require('path');
const mraa = require('mraa');

var app = express();

console.log('MRAA Version: ' + mraa.getVersion());

app.locals.cache = "memory";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.engine('server.view.html', cons['swig']);
app.set('view engine', 'server.view.html');
app.set('views', __dirname + '/app/views/');
app.use(express.static(path.resolve( __dirname + '/public')));


app.route('/')
    .get(function (req, res, next) {
        var title = 'Javi IoT'
        res.render('index', { title: title });

    });

require( __dirname + '/app/controllers/leds')(app);


app.listen(3000, function () {
    console.log('Server listening...');
});