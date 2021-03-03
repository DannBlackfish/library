const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name : {
    type : String
  },
  username:{
    type: String,
    trim: true,
    required: [true, 'El nombre de usuario es requerido.'],
    unique: true
  },
  email:{
    type: String,
    required: [true, 'Para crear tu cuenta introduce tu dirección de correo electrónico'],
    match: [/^\S+@\S+\.\S+$/, 'Proporciona una dirección de correo electrónico válida'],
    unique: true,
    lowercase: true,
    trim: true
},
  passwordHash:{ type: String },

});

const User = mongoose.model('user', userSchema);
module.exports = User;
