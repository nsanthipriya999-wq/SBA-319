/*import 'dotenv/config';

import express from 'express';

import conn from "../db/conn.js";
*/

//import Application from '../models/application.js';
import Application from '../models/application.js';
//import Colleges from '../models/college.js';
//import Students from '../models/student.js';
//import student from '../models/student.js';



//-------------------Starting data insert seed()----------------------------------------------------
/*export async function seed(req,res) {
    try{
        await application.deleteMany({});
        await application.insertMany(data);
        res.send("Sample applications inserted");

    }catch(err)
    {
        res.status(500).json({error:err.message});
    }
}*/
//-------------------Read All Applications (getApplications())----------------------------------------
export async function getApplications(req,res){
    try{                                       //retrieves  full document
        const applications=await Application.find().populate("student").populate("college");
        
                            
        res.json(applications);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------Get one Application (getApplicationById())---------------------------
export async function getApplicationsById(req,res){
    try{
        const result=await Application.findById(req.params.id).populate("student").populate("college");
        if(!result)
        {
            return res.status(404).json({message:"Application not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//-------------------------Get Application By Status---------------------------
//-----------------------http://localhost:3000/applications/status/:status

export async function getApplicationsByStatus(req,res){
    try{
        const result=await Application.find({status:req.params.status}).populate("student").populate("college");
        if(result.length===0)
        {
            return res.status(404).json({message:"Application not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//---------GET Applications by Specific student Id--------------------------------------
//-------http://localhost:3000/applications/student/:studentId------------------

export async function getApplicationsByStudentId(req,res){
    try{
        const result=await Application.find({student:req.params.studentId}).populate("student").populate("college");
        if(result.length===0)
        {
            return res.status(404).json({message:"Application not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }

};




//------------------------------------create new Application createApplication()-------------- 
export async function createApplication(req, res) {
    try {

        console.log(req.body);
        const application = new Application (req.body);

        await application.save();
        return res.status(201).json(application);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};
//---------------------Update Application  (updateApplication())---------------------------------------

export async function updateApplication(req, res) {
    try {

        console.log(req.body);
        const application = await Application.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,});
         
        //await application.save();
        return res.status(200).json(application);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};

//----------------Delete Application function (deleteApplication())--------------------------------------------
export async function deleteApplication(req, res) {
    try {
        console.log(req.body);
        const result = await Application.findByIdAndDelete(req.params.id);
        if (!result) {
            res.status(404).send("Application not found");
        }
        else{
            res.status(200).json(result);
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}
