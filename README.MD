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



