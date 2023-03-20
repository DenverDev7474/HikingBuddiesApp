const express = require('express');
const session = require("express-session");
const MongoStore = require("connect-mongo");
// const path = require("path");
const cookieParser = require('cookie-parser');
const passport = require('passport');

const promisify = require("es6-promisify");
const flash = require("connect-flash");

const expressValidator = require('express-validator');
require('dotenv/config');

const mongoose = require('mongoose');
const api = process.env.API_URL;
const cors = require('cors');
// const errorHandlers = require("./handlers/errorHandlers");


require('./handlers/passport');


const app = express();

//app.use(cors());
//app.options('*', cors());    

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(cookieParser());


mongoose.connect(process.env.DB_CONNECTION)
.then(() => {console.log('DB Connected')})
.catch(err => {console.log(err)});
const connection = mongoose.connection;

const sessionStore = new MongoStore({
    mongooseConnection: connection,
    client: connection.getClient(),
    collection: 'sessions'
});


app.use(session({ 
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true, 
    store: sessionStore, 
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 20 minutes
}));

app.use(passport.initialize());
app.use(passport.session());


//app.use(flash());



// app.use((req, res, next) => {
//     console.log('req.user', req.user);
//     res.body = req.body;
//     next();
// });

// app.use((req, res, next) => {
//     req.login = promisify(req.login, req);
//     next();
// });



// inmporting routers required
const hikesRouter = require('./routers/hikesRouter');
const mountainsRouter = require('./routers/mountainsRouter');
const routesRouter = require('./routers/routesRouter');
const usersRouter = require('./routers/usersRouter');




//routes
app.use(`${api}/`, hikesRouter );
app.use(`${api}/`, mountainsRouter );
app.use(`${api}/`, routesRouter );
app.use(`${api}/`, usersRouter );


app.listen(3000, () => {
    console.log('Server started on port localhost: 3000')
    console.log(api);
});

