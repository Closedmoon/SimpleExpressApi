const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');

const port = process.env.PORT || 3000;

const app = express();



const bookRouter = express.Router();
bookRouter.route('/books')
  .get((req, res) => {
    const query = {};
    if(req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query,(err, books) => {
      if(err) {
        res.send(err);
      } else {
        res.json(books);
      }
    })
  });

app.use('/api', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Express API');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});