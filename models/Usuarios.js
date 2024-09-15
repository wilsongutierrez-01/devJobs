const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;

const usuariosSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  nombre:{
    type: String,
    required: 'Agrega tu nombre',
  }, 
  password:{
    type: String,
    required: true,
    trim: true,
  },
  token: String,
  expira: Date,
});

usuariosSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    return next();
  }

  const hash = await bcrypt.hash(this.password, 12);

  this.password = hash;
  next();
});
module.exports = mongoose.model('Usuarios', usuariosSchema);