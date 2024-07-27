const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//heroku deployment
const path = require('path');           
const PORT = process.env.PORT || 5000;  

const app = express();

app.set('port', (process.env.PORT || 5000)); //end heroku deploy

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.listen(PORT, () => 
  {
    console.log('Server listening on port ' + PORT);
  });
  
  // Add the following for the correct retrieval path -
  // For Heroku deployment
  
  // Server static assets if in production
  if (process.env.NODE_ENV === 'production') 
  {
    // Set static folder
    app.use(express.static('frontend/build'));
  
  
    app.get('*', (req, res) => 
   {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }

require('dotenv').config();
const url = 'mongodb+srv://em845191:UCFEngr003!@cluster0.3wr8zql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const MongoClient = require('mongodb').MongoClient; //you might already have this.
const client = new MongoClient(url);
client.connect();
 
//jwts mern part c
var api = require('./api.js');
api.setApp( app, client );
