
//------------------- Schema-for College Application-------------------------------------------
import mongoose from "mongoose";
const applicationSchema=new mongoose.Schema({
   
 student:{
   type:mongoose.Schema.Types.ObjectId,    //ObjectId references to the student collection.
   ref:"Student",
   required:true,
 },
 college:{
    type:mongoose.Schema.Types.ObjectId, //ObjectId references to the college collection
    ref:"College",
    required:true,
 },
 major:{
    type:String,
    required:true,
    trim:true,
 },
 status:{
    type:String,
    enum:["Planning","Started","Submitted","Accepted","Rejected","Waitlisted",],
    default:"Planning",
 },
 applicationType:{
    type:String,
    enum:["Regular","Rolling","Open","Early Action","Early Decision","Early Evaluation",],
    default:"Regular"
 },
 submittedDate:{
    type:Date,

 },

decisionDate:{
    type:Date,
},
notes:{
    type:String,
},

 },

 {timestamps:true}



);
applicationSchema.index({status:1});

export default mongoose.model("Application", applicationSchema);
