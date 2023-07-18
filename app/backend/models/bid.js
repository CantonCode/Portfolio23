const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    offer:{
        type: Number,
        default:0
    },
    accepted:{
        type: Boolean,
        default:false
    },
    date: {
         type: Date,
         default: Date.now
      },

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs'
    }
    
    })

   module.exports = mongoose.model('Bid', bidSchema);