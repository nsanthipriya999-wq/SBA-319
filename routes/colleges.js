//--------Defines URLs and HTTP methods---------------------------

import express from 'express';
//import College from "../models/college.js";


const app=express.Router();

import {
    
    getColleges,
    getCollegesById,
    createCollege,
    updateCollege,
    deleteCollege
} from "../controllers/collegelogic.js";


app.get("/", getColleges);
app.get("/:id", getCollegesById);
app.post("/",createCollege);
app.patch("/:id",updateCollege);
app.delete("/:id",deleteCollege);
export default app;