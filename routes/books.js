 const express = require('express')
 const router = express.Router()
 const Book = require('../models/book')

 // All Books Route
//  router.get('/', async (req, res) => {
//      res.send('All Books');
//  })
//Get all books
router.get("/", async (req, res) => {
    let searchOptions = {};
    if (req.query.title !== null && req.query.title !== "") {
      searchOptions.title = new RegExp(req.query.title, "i");
    }
    try {
      const books = await Book.find(searchOptions);
      res.render("books/index", {
        books: books,
        searchOptions: req.query,
      });
      // res.send(books);
    } catch {
      res.redirect("/");
    }
  });
 // New Book Route 
 router.get('/new',async(req,res) => {
     res.render('books/new')
 })

// Create Book Route
router.post('/',async (req,res) =>{
    res.send('Create Books');      
})

module.exports = router