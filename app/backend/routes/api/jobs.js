const express = require('express');
const { default: mongoose } = require('mongoose');
const Bid = require('../../models/bid');
const router = express.Router();

const Jobs = require('../../models/jobs');
const jobsService = require('../../services/jobs.service');


// GET api/posts
// Gets all post in the DB
 router.get('/', async(req, res) => {
     try {
         const jobs = await Jobs.find()
         
         if(!jobs) throw Error('Something went wrong while saving the post');

         res.status(200).json(jobs);
     } catch (error) {
         res.status(400).send(error.message)
     }
 });
 

// GET api/posts/:id
// Gets specific post by id
router.get('/:id', async(req, res) => {
    try {
        const jobs = await Jobs.findById(req.params.id);
        
        if(!jobs) throw Error('could not find job');

        res.status(200).json(jobs);
        
    } catch (error) {
        res.status(400).send(error.message)
    }
});

// Gets specific post by id and bid details
router.get('/:id/getBids', async(req, res) => {
    try {
        const jobs = await Jobs.findById(req.params.id).populate('bids').populate({
            path: 'bids',
            populate: {
                path: 'userID',
                model: 'Account',
            },
        });
        

        if(!jobs) throw Error('could not find job');

        res.status(200).json(jobs);
        
    } catch (error) {
        res.status(400).send(error.message)
    }
});

// GET api/posts/getUsersPosts:id
// Gets specific post made by that user
router.get('/getUsersPosts/:id', async(req, res) => {
    try {
        const jobs = await Jobs.find({creator:req.params.id})
        
        if(!jobs) throw Error('could not find any jobs by this user');

        res.status(200).json(jobs);
        
    } catch (error) {
        res.status(400).send(error.message)
    }
});


// Post api/posts
// Creates a post in the DB
router.post('/',async  (req,res) => {
   const newJob = new Jobs(req.body);

   try{
    const job = await newJob.save();
    if(!job) throw Error('Something went wrong while saving the post');

    res.status(200).json(job);
   }catch(error){
    res.status(400).send(error.message);
   }
});



// DELETE api/posts/:id
// Deletes post by id
router.delete('/:id', async(req, res) => {
    try {
        const job = await Jobs.findByIdAndDelete(req.params.id);
        
        if(!job) throw Error('Something went wrong while deleting the post');

        res.status(200).json({success: true});
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.patch('/:id', async(req, res) => {
    try {
        const job = await Jobs.findByIdAndUpdate(req.params.id,req.body);
        
        if(!job) throw Error('Something went wrong while updating the post');

        res.status(200).json(job);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//updates the specified bid to be accepted
router.patch('/:id/acceptBid', async (req, res, next) => {
    // find out which job you are bidding
     const id = req.params.id;
     console.log(id)
     
     
        //checks if the user has already bidded on a job, if not then add their bid tro
        jobsService.jobAccepted(id)
        .then(async (updatedBid) => {

            console.log(updatedBid)

            var b = updatedBid

            try{
                res.status(200).json(b);
            }catch(error){
                res.status(400).send(error.message)
            }
           
        })
        .catch(next);
    
    
})

//check if job has an accepted bid : id = jobID
router.get('/:id/checkIfJobBidAccepted', async(req, res, next) => {
    const id = req.params.id;
    console.log(id)

    jobsService.checkIfJobHasAcceptedBid(id)
    .then(async (acceptBid) => {

        console.log(acceptBid)

        if(acceptBid){
            try {
                console.log("making job unavailable")
                jobsService.setJobToUnavailable(id)
            } catch (error) {
                res.status(400).send(error.message)
            }
        }

        try{
            res.status(200).json(acceptBid);
        }catch(error){
            res.status(400).send(error.message)
        }
       
    })
    .catch(next);
    

    
});




router.post('/:id/sendBid', async (req, res, next) => {
    // find out which job you are bidding
     const id = req.params.id;
     const userID = req.body;
     const user = userID;

     const newBid = new Bid(req.body);
     newBid.jobID = id;
     
        //checks if the user has already bidded on a job, if not then add their bid tro
        jobsService.findIfUserHasBidOnJob(userID,id)
        .then(async (value) => {
           
            // save bid
            try{
                const bid = await newBid.save();
                if(!bid) throw Error('Something went wrong while saving the bid');

                // res.status(200).json(bid);
            }
            catch(error){
                res.status(400).send(error.message);
            }

            try{
                const relatedJob = await Jobs.findById(id);
                relatedJob.bids.push(newBid);
                if(!relatedJob) throw Error('Something went wrong while saving the Job document');

                const job = await relatedJob.save()
                if(!job) throw Error('Something went wrong while saving the Job document');

                res.status(200).json(job);
            }
            catch(error){
                res.status(400).send(error.message);
            }
        })
        .catch(next);
    
    
})




module.exports = router;