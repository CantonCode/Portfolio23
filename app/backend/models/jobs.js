const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const JobSchema = new Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     description:{
//         type:String,
//         required:true,
//     },
//     cat:[{
//         type: String,
//         required:true
//     }],   
//     photo:{
//         type:String, 
//         required:false,
//         default: '',
//     },
//     listingTime:{
//         type:Number,
//         required:true,
//     },
//     listedDate:{
//         type: Date, 
//         default: Date.now 
//     },
//     cost:{
//         type:Number,
//         required:true,
//     },
//     location:{
//         type:String,
//         required:true,
//     },
//     phoneNumber:{
//         type:Number,
//         required:true,
//     },
//     creator:{
//         type:String,
//         required:true
//     },
//     bids:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Bid'
//     }],
//     jobAvailable:
//         {
//             type:Boolean,
//             default:true
//         }
// });

// JobSchema.pre(/^find/,function(next){
//     this.populate({
//         path:'creator',
//       });
//     next();
//     });

// module.exports = mongoose.model('Jobss', JobSchema)