### College Application Tracker - MONGODB Database Application

The College Application Tracker  is a RESTful backend application built with Node.js, Express.js, MongoDB, and Mongoose. It helps students organize and manage their college applications by storing student information, college details, and application records.

The API supports full CRUD (Create, Read, Update, Delete) functionality for three collections students,applications and colleges and demonstrates MongoDB data modeling, indexing, validation, and relationships between collections.


## Technologies Used
•	Node.js
•	Express.js
•	MongoDB
•	Mongoose
•	dotenv
•	Nodemon

## Features
•	Manage student profiles
•	Stores college information
•	Track application status
•	Full CRUD operations for all collections colleges,applications and students.
•	MongoDB indexes for efficient queries
•	Validation using both MongoDB and Mongoose
•	Sample data for testing.


## Database Collections

## Students

Stores information about each student.
Example fields:
•	firstName
•	lastName
•	email
•	graduationYear

## Colleges
Stores information about colleges.
Example fields:
•	name
•	city
•	state
•	applicationDeadline
•	applicationFee
•	website

## Applications
.Stores applications submitted by students.
.Applications connect students and  colleges.
.Applications uses ObjectId references.

Example fields:
•	studentId
•	collegeId
•	status
•	applicationDate
•	decisionDate
•	notes
## Database Relationship

Application collection store refernces to student Object Id and College Object Id.'populate()' retrieves and replaces the
referenced document Id's with the actual documents from the student and college collections.<br/><br/><br/>
                

## API Routes <br/>

#Seed route to load data using data.js file <br/><br/>
   .POST http://localhost:3000/seed <br/><br/>

## Students <br/>
Method	        Route	                                                           Description <br/><br/>
GET	           http://localhost:3000/students	                                   Get all students <br/>
GET	           http://localhost:3000/students/:id	                               Get a student by ID <br/>
POST	         http://localhost:3000/students	                                   Create a new student <br/>
PATCH	         http://localhost:3000/students/:id	                               Update a student <br/>
DELETE	       http://localhost:3000/students/:id	                               Delete a student <br/>


## Colleges <br/><br/>
Method	                        Route	                                             Description <br/><br/>
GET	                       http://localhost:3000/colleges	                      Get all colleges <br/>
GET	                       http://localhost:3000/colleges/:id	                  Get a college by ID <br/>
POST	                     http://localhost:3000/colleges	                      Add a new college <br/>
PATCH	                     http://localhost:3000/colleges/:id	                  Update a college <br/>
DELETE	                   http://localhost:3000/colleges/:id	                  Delete a college <br/>


## Applications <br/><br/>
Method	                        Route	                                               Description <br/><br/>
GET	                       http://localhost:3000/applications	                      Get all applications <br/>
GET	                       http://localhost:3000/applications/:id	                  Get an application by ID <br/>
GET                        http://localhost:3000/applications/student/:studentId	  Get applications for a specific student<br/>
GET	                       http://localhost:3000/applications/status/:status	      Get applications by status <br/>
POST	                     http://localhost:3000/applications	                      Add a new application <br/>
PATCH                      http://localhost:3000/applications/:id	                  Update an application <br/>
DELETE	                   http://localhost:3000/applications/:id	                  Delete an application <br/>

## MongoDB Indexes

Indexes are used to improve query performance on frequently searched fields.

## Students

•	email (unique)

## Colleges

•	name <br/>
•	state<br/>

## Applications
•	studentId <br/>
•	collegeId <br/>
•	status    <br/>

## Validation

## Mongoose Validation(Application side) <br/>
  .Validation is implemented within each schema using required fields, unique constraints, enums, and 
   regular expressions where appropriate.


Required student name and email.
Email addresses must be unique.
Email addresses must follow a valid format.
Application status must be one of: Planning, Started, Submitted, Accepted, Rejected, or Waitlisted.
Application type must be one of: Regular, Rolling, Open, Early Action, Early Decision, or Early Evaluation.


## MongoDB Validation(Database side)<br/>

 
   MongoDb collection validators enforce required fields, data formats, and allowed values , helping maintain data consistency and integrity even when documents are inserted or updated outside the application.
   Database validation was implemented using:

  -->MongoDB Compass **Validation** tab with a JSON Schema validator  <br/>
  -->MongoDB validation settings: <br/><br/>
    -->Validation level:'strict'  <br/><br/>
    -->Validation action:'error'  <br/><br/>

 --> MongoDB Shell "collMod" command to apply and modify collection validation rules <br/>

The validators enforce rules such as: <br/>
 ..>Required fields must be present <br/>
 ..>Data types must match the defined schema <br/>
 ..>Values must fall within acceptable ranges <br/>
 ..>Invalid documents are rejected before being stored <br/>

## Example validations: <br/>
 ..>Student GPA must be between 0 and 4 <br/>
 ..>Graduation year must be within the allowed range <br/>
 ..>College application fee cannot be negative <br/>
 ..>Acceptance rate must be between 0 and 100 <br/>



## Testing<br/><br/>
Testing of all above API routes done using Thunder Client.<br/><br/>

..> POST requests <br/><br/>
..> GET requests  <br/><br/>
..> PATCH requests <br/><br/>
..> DELETE requests <br/><br/>
..> Validation errors <br/><br/>
..> Filter routes <br/><br/>

##   Documents count <br/><br/>

>db.students.countDocuments()<br/><br/>
27 <br/><br/>
>db.colleges.countDocuments() <br/><br/>
27 <br/><br/>
>db.applications.countDocuments() <br/><br/>
27 <br/><br/>


## Exported MongoDB Collection Data <br/><br/>

The data from each collection in the `test` database was exported from MongoDB Compass into separate JSON files.
The exported files are stored in the `test_data` folder:
test_data
  -->  test.applications.json <br/><br/>
  -->  test.colleges.json  <br/><br/>
  -->  test.students.json  <br/><br/>
 
 Each JSON file contains the documents from its corresponding MongoDB collection:

  -->`test.students.json`     — contains all student records <br/><br/>
  -->`test.colleges.json`     — contains all college records <br/><br/>
  -->`test.applications.json` — contains all college application records <br/><br/>

These exported JSON files can be used  to restore sample data, test database CRUD operations and verify collection relationships.

## Important commands

-->npm init - y                   ----- Installing Dependencies.

-->npm i express dotenv mongoose  ----- Installing Express,Mongoose,Dotenv

-->nodemon index                  ----- Starting the Server.



## Thank you!

