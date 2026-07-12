#College Application Tracker API

The College Application Tracker API is a RESTful backend application built with Node.js, Express.js, MongoDB, and Mongoose. It helps students organize and manage their college applications by storing student information, college details, and application records.

The API supports full CRUD (Create, Read, Update, Delete) functionality and demonstrates MongoDB data modeling, indexing, validation, and relationships between collections.


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
Example fields:
•	studentId
•	collegeId
•	status
•	applicationDate
•	decisionDate
•	notes

#API Routes

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
PUT	                       http://localhost:3000/colleges/:id	                  Update a college
DELETE	                   http://localhost:3000/colleges/:id	                  Delete a college


#Applications
Method	                        Route	                                               Description
GET	                       http://localhost:3000/applications	                      Get all applications
GET	                       http://localhost:3000/applications/:id	                  Get an application by ID
GET                        http://localhost:3000/applications/student/:studentId	  Get applications for a specific student
GET	                       http://localhost:3000/applications/status/:status	      Get applications by status
POST	                   http://localhost:3000/applications	                      Add a new application
PUT	                       http://localhost:3000/applications/:id	                  Update an application
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

Mongoose Validation
Validation is implemented within each schema using required fields, unique constraints, enums, and regular expressions where appropriate.


•	Required student name and email
   a` (6) is more than maximum allowed value (4)."
       }
•	Unique email addresses
•	Valid email format
•	Application status and type limited to predefined values.
     enum:["Planning","Started","Submitted","Accepted","Rejected","Waitlisted",]
     enum:["Regular","Rolling","Open","Early Action","Early Decision","Early Evaluation",].


#MongoDB Validation

MongoDB collection validators enforce required fields and acceptable values to ensure database consistency even if data is inserted outside the application.(MongoDB Compass.)



Thank you!

