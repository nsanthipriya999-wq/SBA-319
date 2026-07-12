#College Application Tracker API

The College Application Tracker API is a RESTful backend application built with Node.js, Express.js, MongoDB, and Mongoose. It helps students organize and manage their college applications by storing student information, college details, and application records.

The API supports full CRUD (Create, Read, Update, Delete) functionality for three collections students,applications and colleges and demonstrates MongoDB data modeling, indexing, validation, and relationships between collections.


Technologies Used
•	Node.js
•	Express.js
•	MongoDB
•	Mongoose
•	dotenv
•	Nodemon

Features
•	Manage student profiles
•	Stores college information
•	Track application status
•	Full CRUD operations for all collections colleges,applications and students.
•	MongoDB indexes for efficient queries
•	Validation using both MongoDB and Mongoose
•	Sample data for testing.


#Database Collections

#Students

Stores information about each student.
Example fields:
•	firstName
•	lastName
•	email
•	graduationYear

#Colleges
Stores information about colleges.
Example fields:
•	name
•	city
•	state
•	applicationDeadline
•	applicationFee
•	website

#Applications
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

#Database Relationships
Student  --------\
                  \
                   Application store references to student ObjectId and College ObjectId. 
                  /
College  --------/

#API Routes

#Seed route to load data using data.js file
POST http://localhost:3000/seed 

#Students
Method	        Route	                                                           Description
GET	           http://localhost:3000/students	                                   Get all students
GET	           http://localhost:3000/students/:id	                               Get a student by ID
POST	       http://localhost:3000/students	                                   Create a new student
PATCH	       http://localhost:3000/students/:id	                               Update a student
DELETE	       http://localhost:3000/students/:id	                               Delete a student


#Colleges
Method	                        Route	                                             Description
GET	                       http://localhost:3000/colleges	                      Get all colleges
GET	                       http://localhost:3000/colleges/:id	                  Get a college by ID
POST	                   http://localhost:3000/colleges	                      Add a new college
PATCH	                       http://localhost:3000/colleges/:id	                  Update a college
DELETE	                   http://localhost:3000/colleges/:id	                  Delete a college


#Applications
Method	                        Route	                                               Description
GET	                       http://localhost:3000/applications	                      Get all applications
GET	                       http://localhost:3000/applications/:id	                  Get an application by ID
GET                        http://localhost:3000/applications/student/:studentId	  Get applications for a specific student
GET	                       http://localhost:3000/applications/status/:status	      Get applications by status
POST	                   http://localhost:3000/applications	                      Add a new application
PATCH                      http://localhost:3000/applications/:id	                  Update an application
DELETE	                   http://localhost:3000/applications/:id	                  Delete an application

#MongoDB Indexes

Indexes are used to improve query performance on frequently searched fields.

#Students

•	email (unique)

#Colleges

•	name
•	state

#Applications
•	studentId
•	collegeId
•	status

#Validation

Mongoose Validation(Application side)
Validation is implemented within each schema using required fields, unique constraints, enums, and regular expressions where appropriate.


•	Required student name and email
•	Unique email addresses
•	Valid email format
•	Application status and type limited to predefined values.
     enum:["Planning","Started","Submitted","Accepted","Rejected","Waitlisted",]
     enum:["Regular","Rolling","Open","Early Action","Early Decision","Early Evaluation",].


#MongoDB Validation(Database side)

MongoDB collection validators enforce required fields and acceptable values to ensure database consistency even if data is inserted outside the application.Validation done in MongoDB Compass using Validation tab defined with JSON Schema validator along with setting Action and level values and also collmod operator in mongosb shell for college schema

#Testing
Testing of all above API routes done using Thunder Client.


Thank you!

