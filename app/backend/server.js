const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
 
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('./_middleware/error-handler');

var cors = require('cors');

// use it before all route definitions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({credentials: true, origin: ['http://localhost:4200','https://mvp.localbids.app','https://cantoncode.github.io']}));


const jobRoutes = require('./routes/api/jobs');

const PORT = process.env.PORT || 5000

//BodyParser Middleware
app.use(express.json())


app.get('/',(req,res) => { 
    res.send("Hello from Node")
});

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err=> console.log(err));

app.use('/api/jobs',jobRoutes);
app.use('/accounts', require('./routes/account/account.controller'));
app.use(errorHandler);

app.listen(PORT,() => console.log('ruinning on port ' + PORT));