const mongoose = require('mongoose');
require('./config/db')

const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const router = require('./routes');
const disableCors = require('./middlewares/disableCors')



require('dotenv').config({path:'.env'});

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', 
 engine({
  defaultLayout: 'layout',
  helpers: require('./helpers/handlebars')
 })
);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE })
}))


app.use('/',disableCors.disableCors,router());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});