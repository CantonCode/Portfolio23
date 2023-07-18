const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String, 
        required:true,
        default: '',
    },
    description:{
        type:String,
        required:true,
    },
    technoligies:{
        type:Array,
        required:true,
    },
    github:{
        type:String,
        required:true,
    }
});

ProjectSchema.pre(/^find/,function(next){
    this.populate({
        path:'name',
      });
    next();
    });

module.exports = mongoose.model('Projects', ProjectSchema)