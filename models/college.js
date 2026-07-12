//-----------------------------College Collection Schema-------------------------------------
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

/*-----sample validation data---------------
{ "name": "", 
 "city": "Boston", 
 "state": "Massachusetts", 
 "applicationFee": -20, 
 "acceptanceRate": 150, 
 "website": "google.com" }

 route: POST http://localhost:3000/colleges
 Response:

{
  "error": "College validation failed: applicationDeadline: 
  Path `applicationDeadline` is required., 
  name: Path `name` is required., applicationFee: 
  Path `applicationFee` (-20) is less than minimum allowed value (0).,
   acceptanceRate: Path `acceptanceRate` (150) is more than maximum allowed value (100)."
}


MONGODB Validation done in COMPASS 

{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'name',
      'city',
      'state',
      'applicationDeadline',
      'website'
    ],
    properties: {
      name: {
        bsonType: 'string',
        minLength: 3
      },
      city: {
        bsonType: 'string'
      },
      state: {
        bsonType: 'string',
        minLength: 2,
        maxLength: 2
      },
      applicationDeadline: {
        bsonType: 'date'
      },
      applicationFee: {
        bsonType: [
          'int',
          'double'
        ],
        minimum: 0
      },
      acceptanceRate: {
        bsonType: [
          'int',
          'double'
        ],
        minimum: 0,
        maximum: 100
      },
      website: {
        bsonType: 'string',
        pattern: '^https?://'
      }
    }
  }
}


Action set to 'error', LEVEL to 'strict'


validation set through MONGODB shell
db.runCommand({
  collMod: "students",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "firstName",
        "lastName",
        "email",
        "graduationYear",
        "gpa"
      ],
      properties: {
        firstName: {
          bsonType: "string",
          minLength: 2
        },
        lastName: {
          bsonType: "string",
          minLength: 2
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$"
        },
        graduationYear: {
          bsonType: "int",
          minimum: 2025,
          maximum: 2035
        },
        gpa: {
          bsonType: ["double", "int"],
          minimum: 0,
          maximum: 4
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

Response
{
  ok: 1,
  '$clusterTime': {
    clusterTime: Timestamp({ t: 1783893007, i: 2 }),
    signature: {
      hash: Binary.createFromBase64('9+ln4Egl2EXjSXk/Tu3yjCT2CJA=', 0),
      keyId: Long('7632001578974576652')
    }
  },
  operationTime: Timestamp({ t: 1783893007, i: 2 })
}
*/
