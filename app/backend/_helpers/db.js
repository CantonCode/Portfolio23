const mongoose = require('mongoose');

module.exports = {
    Account: require('../models/account/account.model'),
    RefreshToken: require('../models/account/refresh-token.model'),
    Project: require('../models/project/project'),
    isValidId,
    Jobs: require('../models/jobs'),
    Bid: require('../models/bid'),
    
};

function isValidId(id) {
    console.log("hi");
    return mongoose.Types.ObjectId.isValid(id);
}