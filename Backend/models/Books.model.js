const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title : {
    type : String
  },
  image:{
    type : String
  },
  pages:{
    type: Number
},
  author:{ type: String },
  description:{
        type : String
    }
});

const Book = mongoose.model('book', bookSchema);
module.exports = Book;
