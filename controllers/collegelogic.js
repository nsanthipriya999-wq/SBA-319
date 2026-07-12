//-----------------------------College collection controller logic---------------------------
import College from '../models/college.js';
//------------------------------ GET Request-------------------------------------------
// -------------http://localhost:3000/colleges--------------------------------------------
export async function getColleges(req,res){
    try{                                       //retrieves  full document
        const applications=await College.find();
        
                            
        res.json(applications);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------Get Request to read colleges by ID-------------------------
// -------------------http://localhost:3000/colleges/:id----------------------------------

export async function getCollegesById(req,res){
    try{
        const result=await College.findById(req.params.id);
        if(!result)
        {
            return res.status(404).json({message:"College not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-----------------POST--Request to create a  new College------------------------------
// --------------------------- http://localhost:3000/colleges--------------------------

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
//---------------------Update College (PATCH request)------------------------------------
// ---------------http://localhost:3000/colleges/:id--------------------------------------

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

//----------------Delete Request for deleting college by Id------------------------
// --------------------http://localhost:3000/colleges/:id------------------------------------

export async function deleteCollege(req, res) {
    try {
        console.log(req.body);
        const result = await College.findByIdAndDelete(req.params.id);
        if (!result) {
            res.status(404).send("College not found");
        }
        else{
            res.status(200).json(result);
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}
