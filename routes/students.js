//--------Defines URLs and HTTP methods---------------------------

import express from 'express';
import Student from "../models/student.js";


const app=express.Router();

import {
    
    getStudents,
    getStudentsById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentlogic.js";


app.get("/", getStudents);
app.get("/:id", getStudentsById);
app.post("/",createStudent);
app.patch("/:id",updateStudent);
app.delete("/:id",deleteStudent);
export default app;