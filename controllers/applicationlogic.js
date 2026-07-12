//-------------------------Application collection controller logic--------------------------
import Application from '../models/application.js';

//-------------------Read All Applications (getApplications())--------------------------
// ---------------http://localhost:3000/applications-------------------------------------
export async function getApplications(req,res){
    try{                                       //retrieves  full document
        const applications=await Application.find().populate("student").populate("college");
        //replaces referenced object Id values  with the actual data from student and college collections
        res.json(applications);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------Get one Application (getApplicationById())--------------------------
// ---------------http://localhost:3000/applications/:id---------------------------------
export async function getApplicationsById(req,res){
    try{
        const result=await Application.findById(req.params.id).populate("student").populate("college");
        if(result.length===0)
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




//-----------------------------POST-------create new Application createApplication()----------
// ---------------------------http://localhost:3000/applications---------------------------
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
//---------------PATCH------Update Application  (updateApplication())---------------------------
// ------------------------http://localhost:3000/applications/:id--------------------------

export async function updateApplication(req, res) {
    try {

        console.log(req.body);
        const application = await Application.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,});
        return res.status(200).json(application);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};

//----------------Delete Application by id-----------------------------------------------
// -------------------http://localhost:3000/applications/:id-------------------------------

export async function deleteApplication(req, res) {
    try {
        console.log(req.body);
        const result = await Application.findByIdAndDelete(req.params.id);
        if (result.length===0) {
            res.status(404).send("Application not found");
        }
        else{
            res.status(200).json(result);
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}
