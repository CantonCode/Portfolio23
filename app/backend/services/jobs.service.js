const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const sendEmail = require('../_helpers/send-email');
const db = require('../_helpers/db');
const Role = require('../_helpers/role');

module.exports = {
    findIfUserHasBidOnJob,
    jobAccepted,
    checkIfJobHasAcceptedBid,
    setJobToUnavailable
}

async function findIfUserHasBidOnJob(id,jobID) {
    const userID = id.userID;
    const job = await db.Jobs.findById(jobID).populate('bids');
    const jobBids = job.bids;

    const bidExists = jobBids.some(x => x.userID.toString() === userID);

    if(bidExists){
        throw 'User Already Has a Bid'
    }

    return bidExists;

}

async function jobAccepted(id) {
    console.log(id);

    db.Bid.findByIdAndUpdate(id,{accepted:true},function(err,data){
        if (err){
            console.log(err)
        }
        else{
            console.log("Bid User : ", data);
            var jobID = data.jobID.toString()
            console.log(jobID);
            setJobToUnavailable(jobID)

            return data
        }
    })

    
   
}

async function checkIfJobHasAcceptedBid(id){
    console.log(id);

    const job = await db.Jobs.findById(id).populate('bids');
    const jobBids = job.bids;

    const acceptedBid = jobBids.some(x => x.accepted == true);
    console.log(acceptedBid)

   return acceptedBid
    
}

async function setJobToUnavailable(id){
    console.log("setting avail to false")
    const job = await db.Jobs.findByIdAndUpdate(id,{"jobAvailable":"false"});

    if(job.jobAvailable == true){
        throw 'Error updating job Availability'
    }else{
        console.log("Job set to false")
        return job
    }
}