const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
 require('dotenv').config();
const { MONGO_URI } = process.env;
const { API_PORT} = process.env;

//db connnection

mongoose.connect(MONGO_URI);
mongoose.Promise = global.Promise;
//middleware 
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

//http://localhost:5000/api/ninjas
const routes = require('./routes/api');
app.use('/api', routes);


//error handling
app.use(function(err, req, res, next) {
    res.status(422).send({ Error: err.message });
});

const port = process.env.PORT || API_PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));