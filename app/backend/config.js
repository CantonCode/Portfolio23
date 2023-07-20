var dotenv = require('dotenv');

dotenv.config();

module.exports ={
    MONGO_URI: 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD +'@cluster0.as5xkk1.mongodb.net/MyPortfolio'
}
//test