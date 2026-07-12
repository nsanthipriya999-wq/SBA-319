
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


/* -----Validation-----------------
sample data:
{
  "student": "6a52b6d869e022b74412db8d",
  "college": "6a52b6d769e022b74412db78",
  "major": "Computer Science",
  "status": "Planning",
  "applicationType": "VIP"
}



Route: POST http://localhost:3000/applications

Error response from Thunder Client:

{
  "error": "Application validation failed: applicationType: `VIP` is not a valid enum value for path `applicationType`."
}

//------------MONGODB Validation---------------------
{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'student',
      'college',
      'major',
      'status',
      'applicationType'
    ],
    properties: {
      student: {
        bsonType: 'objectId'
      },
      college: {
        bsonType: 'objectId'
      },
      major: {
        bsonType: 'string',
        minLength: 2
      },
      status: {
        'enum': [
          'Planning',
          'Started',
          'Submitted',
          'Accepted',
          'Rejected',
          'Waitlisted'
        ]
      },
      applicationType: {
        'enum': [
          'Regular',
          'Rolling',
          'Open',
          'Early Action',
          'Early Decision',
          'Early Evaluation'
        ]
      },
      submittedDate: {
        bsonType: 'date'
      },
      decisionDate: {
        bsonType: 'date'
      },
      notes: {
        bsonType: 'string'
      }
    }
  }
}

Action to 'Error' Level to 'strict'






*/

