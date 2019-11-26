const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
// const Greetings = require('./greetings-webapp');
const greetings = require("./greetings-webapp");
const Greetings = greetings();

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// initialise session middleware - flash-express depends on it
app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());





app.get('/', function (req, res) {

    var counter = Greetings.counter;
    res.render('index', { counter });

});

app.post('/greet', function (req, res) {

    var name = req.body.nameInput
    var language = req.body.radioBtn
    var counter = Greetings.counter;
    var greeting = Greetings.greet(name, language)

    if (name === "" || name === undefined) {
        req.flash('info', "Please enter name right now")
    }

    else if (language === "" || language === undefined) {
        req.flash('info', "Please select language")
    }

    res.render('index', { greeting, counter });

});

// app.post('/greet', function (req, res) {

//     var name = req.body.nameInput
//     var language = req.body.radioBtn

    

//     res.redirect('/');

// });

app.get('/counter', function (req, res) {

    var counter = Greetings.counter;
    res.render('index', { counter });

});


let PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('App is starting on.....', PORT);
});

