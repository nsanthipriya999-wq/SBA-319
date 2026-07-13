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
Stores applications submitted by students.
Applications connect students and  colleges.
Applications uses ObjectId references.

Example fields:
•	studentId
•	collegeId
•	status
•	applicationDate
•	decisionDate
•	notes

## Database Relationships
Student  --------\
                  \
                   Application store references to student ObjectId and College ObjectId. 
                  /
College  --------/

## API Routes

#Seed route to load data using data.js file
POST http://localhost:3000/seed 

## Students
Method	        Route	                                                           Description
GET	           http://localhost:3000/students	                                   Get all students
GET	           http://localhost:3000/students/:id	                               Get a student by ID
POST	       http://localhost:3000/students	                                   Create a new student
PATCH	       http://localhost:3000/students/:id	                               Update a student
DELETE	       http://localhost:3000/students/:id	                               Delete a student


## Colleges
Method	                        Route	                                             Description
GET	                       http://localhost:3000/colleges	                      Get all colleges
GET	                       http://localhost:3000/colleges/:id	                  Get a college by ID
POST	                   http://localhost:3000/colleges	                      Add a new college
PATCH	                       http://localhost:3000/colleges/:id	                  Update a college
DELETE	                   http://localhost:3000/colleges/:id	                  Delete a college


## Applications
Method	                        Route	                                               Description
GET	                       http://localhost:3000/applications	                      Get all applications
GET	                       http://localhost:3000/applications/:id	                  Get an application by ID
GET                        http://localhost:3000/applications/student/:studentId	  Get applications for a specific student
GET	                       http://localhost:3000/applications/status/:status	      Get applications by status
POST	                   http://localhost:3000/applications	                      Add a new application
PATCH                      http://localhost:3000/applications/:id	                  Update an application
DELETE	                   http://localhost:3000/applications/:id	                  Delete an application

## MongoDB Indexes

Indexes are used to improve query performance on frequently searched fields.

## Students

•	email (unique)

## Colleges

•	name
•	state

## Applications
•	studentId
•	collegeId
•	status

## Validation

## Mongoose Validation(Application side)
Validation is implemented within each schema using required fields, unique constraints, enums, and regular expressions where appropriate.


•	Required student name and email
•	Unique email addresses
•	Valid email format
•	Application status and type limited to predefined values.
     enum:["Planning","Started","Submitted","Accepted","Rejected","Waitlisted",]
     enum:["Regular","Rolling","Open","Early Action","Early Decision","Early Evaluation",].


## MongoDB Validation(Database side)

MongoDB collection validators are used to enforce required fields and acceptable values, ensuring database consistency even when data is inserted outside of the application.

Database validation was implemented using:

   MongoDB Compass **Validation** tab with a JSON Schema validator
   MongoDB validation settings:
   `validationLevel: "strict"`
   `validationAction: "error"`
 MongoDB Shell `collMod` command to apply and modify collection validation rules

The validators enforce rules such as:
 Required fields must be present
 Data types must match the defined schema
 Values must fall within acceptable ranges
 Invalid documents are rejected before being stored

## Example validations:
 Student GPA must be between 0 and 4
 Graduation year must be within the allowed range
 College application fee cannot be negative
 Acceptance rate must be between 0 and 100



## Testing
Testing of all above API routes done using Thunder Client.

POST requests
GET requests
PATCH requests
DELETE requests
Validation errors
Filter routes

##   Documents count
>db.students.countDocuments()
22
>db.colleges.countDocuments()
25
>db.applications.countDocuments()
27
## Exported MongoDB Collection Data

The data from each collection in the `test` database was exported from MongoDB Compass into separate JSON files.

The exported files are stored in the `test_data` folder:
test_data
   test.applications.json
   test.colleges.json
   test.students.json
 
 Each JSON file contains the documents from its corresponding MongoDB collection:

  `test.students.json` — contains all student records
  `test.colleges.json` — contains all college records
  `test.applications.json` — contains all college application records

These exported JSON files can be used  to restore sample data, test database CRUD operations and verify collection relationships.

## Important commands
>npm init - y

>npm i express dotenv mongoose

>nodemon index

Thank you!

