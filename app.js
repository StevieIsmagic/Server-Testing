const mongoose = require('mongoose');
const server = require('./server');

mongoose.connect('mongodb://localhost/food', {}, (err) => {
  if (err) return console.log(err);
  console.log('Connected to your Food DataBase!');
});

server.listen(8080, () =>{
  console.log('Server listening on port 8080');
});