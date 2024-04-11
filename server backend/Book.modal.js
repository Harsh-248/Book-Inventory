const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    bookTitle:{
        type:String
    },
    authorName:{
        type:String
    },
    imageURL:{
        type:String
    },
    category:{
        type:String
    },
    bookDescription:{
        type:String
    },
    bookPDFURL:{
        type:String
    }
})
const Book = mongoose.model("Books" , BookSchema)

module.exports = Book