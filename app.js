const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

const bookRouter = express.Router();
bookRouter.route('/books')
.get((req, res) => {
  var sample = {hello: 'Hello from Router'};
  res.json(sample);
});

app.use('/api', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Express API');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
