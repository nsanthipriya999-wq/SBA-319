
import College from '../models/college.js';
//-------------------Read All Applications (getApplications())----------------------------------------
export async function getColleges(req,res){
    try{                                       //retrieves  full document
        const applications=await College.find();
        
                            
        res.json(applications);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------Get one Application (getApplicationById())---------------------------
export async function getCollegesById(req,res){
    try{
        const result=await College.findById(req.params.id);
        if(!result)
        {
            return res.status(404).json({message:"Application not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//------------------------------------create new Application createApplication()-------------- 
export async function createCollege(req, res) {
    try {

        console.log(req.body);
        const result = new College (req.body);

        await result.save();
        return res.status(201).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};
//---------------------Update Application  (updateApplication())---------------------------------------

export async function updateCollege(req, res) {
    try {

        console.log(req.body);
        const result = await College.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,});
         
        //await application.save();
        return res.status(200).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};

//----------------Delete Application function (deleteApplication())--------------------------------------------
export async function deleteCollege(req, res) {
    try {
        console.log(req.body);
        const result = await College.findByIdAndDelete(req.params.id);
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
