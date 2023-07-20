const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    company:{
        type:String,
        required:true,
    },
    role:{
        type:String, 
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    tasks:{
        type:Array,
        required:true,
    },
});

// ProjectSchema.pre(/^find/,function(next){
//     this.populate({
//         path:'name',
//       });
//     next();
//     });

module.exports = mongoose.model('Job', JobSchema)