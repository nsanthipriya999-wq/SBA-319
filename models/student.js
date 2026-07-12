import mongoose from 'mongoose';

const studentSchema=new mongoose.Schema(
    {
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
    
  },
  graduationYear:{
    type:Number,
    required:true,
    min:2025,
  },
  gpa:{
    type:Number,
    min:0,
    max:4,
  },
},
{timestamps:true}
);



export default mongoose.model("Student", studentSchema);
