import data from "../data.js";
import express from 'express';
import 'dotenv/config';
import Applications from "../models/application.js";
import Students from "../models/student.js";
import Colleges from "../models/college.js";
const router=express.Router();
router.post("/", async (req,res)=>{
try{
   await Students.deleteMany({});
await Colleges.deleteMany({});
await Applications.deleteMany({});
  //  await Applications.insertMany(data);
    const college=await Colleges.insertMany(data.colleges);
    const student=await Students.insertMany(data.students);
console.log(college);
console.log(student);
//--------------------------new addition------------------------------
const statuses = [
  "Planning",
  "Started",
  "Submitted",
  "Accepted",
  "Rejected",
  "Waitlisted"
];

const applicationTypes = [
  "Regular",
  "Early Action",
  "Early Decision",
  "Rolling"
];

const majors = [
  "Computer Science",
  "Engineering",
  "Biology",
  "Data Science",
  "Business",
  "Psychology",
  "Nursing",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Finance",
  "Economics",
  "Marketing",
  "Political Science",
  "Information Technology",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Environmental Science",
  "Architecture",
  "Communications"
];


const applicationData = student.map((studentDat, index) => ({
  student: studentDat._id,
  college: college[index]._id,
  major: majors[index],
  status: statuses[index % statuses.length],
  applicationType: applicationTypes[index % applicationTypes.length],
  submittedDate: new Date(),
  notes: `Application for ${majors[index]}`
}));

await Applications.insertMany(applicationData);
res.send("Database seeded successfully");

} catch (error) {
  console.error(error);
  res.status(500).send(error.message);
}

});
    
export default router;
/////////////////////////////////////////////////////////////////////////////////////////////////////
   /*  const applicationData = [
          {
            student: student[0]._id,
            college: college[0]._id,
            major: "Computer Science",
            status: "Planning",
            applicationType: "Regular",
          },
          {
            student: student[1]._id,
            college: college[1]._id,
            major: "Engineering",
            status: "Started",
            applicationType: "Early Action",
          },
          {
            student: student[2]._id,
            college: college[2]._id,
            major: "Biology",
            status: "Submitted",
            applicationType: "Regular",
            submittedDate: new Date(),
          },
          {
  student: student[3]._id,
  college: college[3]._id,
  major: "Electrical Engineering",
  status: "Accepted",
  applicationType: "Early Decision",
  submittedDate: new Date(),
  
},
{
  student: student[4]._id,
  college: college[4]._id,
  major: "Data Science",
  status: "Waitlisted",
  applicationType: "Rolling",
  submittedDate: new Date(),
  
}
        ];
    
        await Applications.insertMany(applicationData);
    
        res.send("Database seeded successfully");
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
    });
    
    export default router;*/

///////////////////////////////////////////////////////////////////////////////////////////////////
    /*Server is running on port: 3000
MongoDB Connected with Mongoose!
[
  {
    name: 'Massachusetts Institute of Technology',
    city: 'Cambridge',
    state: 'MA',
    applicationDeadline: 2026-01-01T00:00:00.000Z,
    applicationFee: 75,
    acceptanceRate: 4.8,
    website: 'https://web.mit.edu',
    _id: new ObjectId('6a5005a6e81cdf9c0a0fc341'),
    __v: 0,
    createdAt: 2026-07-09T20:33:42.149Z,
    updatedAt: 2026-07-09T20:33:42.149Z
  },
  {
    name: 'Stanford University',
    city: 'Stanford',
    state: 'CA',
    applicationDeadline: 2026-01-05T00:00:00.000Z,
    applicationFee: 90,
    acceptanceRate: 3.9,
    website: 'https://www.stanford.edu',
    _id: new ObjectId('6a5005a6e81cdf9c0a0fc342'),
    __v: 0,
    createdAt: 2026-07-09T20:33:42.149Z,
    updatedAt: 2026-07-09T20:33:42.149Z
  },
  {
    name: 'University of Michigan',
    city: 'Ann Arbor',
    state: 'MI',
    applicationDeadline: 2026-02-01T00:00:00.000Z,
    applicationFee: 65,
    acceptanceRate: 18,
    website: 'https://umich.edu',
    _id: new ObjectId('6a5005a6e81cdf9c0a0fc343'),
    __v: 0,
    createdAt: 2026-07-09T20:33:42.149Z,
    updatedAt: 2026-07-09T20:33:42.149Z
  }
]
[
  {
    firstName: 'Amy',
    lastName: 'Johnson',
    email: 'amy.johnson@example.com',
    graduationYear: 2026,
    gpa: 3.9,
    _id: new ObjectId('6a5005a6e81cdf9c0a0fc344'),
    __v: 0,
    createdAt: 2026-07-09T20:33:42.182Z,
    updatedAt: 2026-07-09T20:33:42.182Z
  },
  {
    firstName: 'Brian',
    lastName: 'Lee',
    email: 'brian.lee@example.com',
    graduationYear: 2025,
    gpa: 3.7,
    _id: new ObjectId('6a5005a6e81cdf9c0a0fc345'),
    __v: 0,
    createdAt: 2026-07-09T20:33:42.183Z,
    updatedAt: 2026-07-09T20:33:42.183Z
  },
  {
    firstName: 'Sophia',
    lastName: 'Martinez',
    email: 'sophia.martinez@example.com',
    graduationYear: 2026,
    gpa: 4,
    _id: new ObjectId('6a5005a6e81cdf9c0a0fc346'),
    __v: 0,
    createdAt: 2026-07-09T20:33:42.183Z,
    updatedAt: 2026-07-09T20:33:42.183Z
  }
]
*/