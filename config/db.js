const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

mongoose.connect(process.env.DATABASE);

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
  process.exit(1);
});

//import models
require('../models/Vacantes');
require('../models/Usuarios');