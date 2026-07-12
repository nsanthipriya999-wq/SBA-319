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
    lowercase:true,
     match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]         //regex validation for email
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


/*------------ Validation-----------------
sample:

{
  "firstName": "Emily",
  "lastName": "Wilson",
  "email": "emilywilson",
  "graduationYear": 2026,
  "gpa": 3.85
}

route: POST http://localhost:3000/students

  Error response:
  {
  "error": "Student validation failed: firstName: Path `firstName` is required.,
   email: Please enter a valid email address, 
   gpa: Path `gpa` (6) is more than maximum allowed value (4)."
}
  

MONGODB Compass

{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'firstName',
      'lastName',
      'email',
      'graduationYear',
      'gpa'
    ],
    properties: {
      firstName: {
        bsonType: 'string',
        minLength: 2
      },
      lastName: {
        bsonType: 'string',
        minLength: 2
      },
      email: {
        bsonType: 'string',
        pattern: '^.+@.+\\..+$'
      },
      graduationYear: {
        bsonType: 'int',
        minimum: 2025,
        maximum: 2035
      },
      gpa: {
        bsonType: [
          'double',
          'int'
        ],
        minimum: 0,
        maximum: 4
      }
    }
  }
}

Action set to 'error' and Level to 'strict'.

*/