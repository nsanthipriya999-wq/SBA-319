//--------Defines URLs and HTTP methods---------------------------

import express from 'express';
import Application from "../models/application.js";


const app=express.Router();

import {
    
    getApplications,
    getApplicationsById,
    createApplication,
    updateApplication,
    deleteApplication
} from "../controllers/applicationlogic.js";


app.get("/", getApplications);
app.get("/:id", getApplicationsById);
app.post("/",createApplication);
app.patch("/:id",updateApplication);
app.delete("/:id",deleteApplication);
export default app;