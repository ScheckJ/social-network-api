const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get('/test', (req, res) => {
    res.status(200).send('Test route works!');
  });
  
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Social media running on port ${PORT}!`);
  });
});
