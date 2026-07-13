import data from "../data.js";
import express from 'express';
import 'dotenv/config';
import Applications from "../models/application.js";
import Students from "../models/student.js";
import Colleges from "../models/college.js";
const router=express.Router();
router.post("/", async (req,res)=>{
try{
   await Students.deleteMany({});      //Deletes all records of Student collection
   await Colleges.deleteMany({});      //Deletes all records of College collection
   await Applications.deleteMany({});  //Deletes all existing records of 'Application'
   const college=await Colleges.insertMany(data.colleges); //inserts data into 'College'
   const student=await Students.insertMany(data.students); //inserts data into 'Student'
console.log(college);
console.log(student);
//--------------------------predefined  values for 'status' 'applicationTypes' 'majors'------------------------------
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


const applicationData = student.map((studentDat, index) => ({   //loops through every student
  student: studentDat._id,         //stores the student id
  college: college[index]._id,     //college id 
  major: majors[index],            //value from majors array
  status: statuses[index % statuses.length], //prevents out of bound values
  applicationType: applicationTypes[index % applicationTypes.length],
  submittedDate: new Date(),        //stores the current date
  notes: `Application for ${majors[index]}`  //creates a notes for the specific major
}));

await Applications.insertMany(applicationData);  //inserts application data
res.send("Database seeded successfully");

} catch (error) {
  console.error(error);
  res.status(500).send(error.message);
}

});
    
export default router;