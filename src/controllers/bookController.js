const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  )
    res.send({msg: allBooks})
}

const bookByYear = async function (req, res){

    let k= req.body.year;
    let books = await BookModel.find( {year : k})
    res.send({msg: books})
}


const ind = async function(req, res){

    let booksind = await BookModel.find( { $or: [ { stockAvailable: true}, { totalPages: {$gt: 700}}] });
 res.send({msg: booksind})



}


const get = async function(req, res){

    let booksind = await BookModel.find({"prices.indianPrice": {$in:[100,200,500]}});
 res.send({msg: booksind})



}

// const get = async function(req, res){
  
    
//     k= req.body.bookName
//     k1= req.body.authorName
//     k2= req.body.year
//     k3= req.body.prices
//     k4= req.body.totalPages

//     if(k){  let books = await BookModel.find( {bookName : k})
//     res.send({msg: books})}

//     if(k1){  let books = await BookModel.find( {authorName : k1})
//     res.send({msg: books})}

//     if(k2){  let books = await BookModel.find( {year : k2})
//     res.send({msg: books})}
    
//     if(k3){  let books = await BookModel.find( {prices: k3})
//     res.send({msg: books})}

//     if(k4){  let books = await BookModel.find( {totalPages : k4})
//     res.send({msg: books})}



// }





module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookByYear = bookByYear
module.exports.ind =ind
module.exports.get=get
