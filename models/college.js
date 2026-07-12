import mongoose from "mongoose";
const collegeSchema= new mongoose.Schema(
    {


    name:{
        type:String,
        required:true,

    },
     city:{
        type:String,
        required:true,

    },
     state:{
        type:String,
        required:true,

    },
     applicationDeadline:{
        type:Date,
        required:true,

    },
     applicationFee:{
        type:Number,
        default:0,
        min:0,
    

    },
     acceptanceRate:{
        type:Number,
        min:0,
        max:100,

    },
     website:{
        type:String,
        

    },
    },
    {timestamps:true}
);
collegeSchema.index({name:1});                          //create an index on name
collegeSchema.index({ state: 1 });                     //creates an index on state
export default mongoose.model("College", collegeSchema);






