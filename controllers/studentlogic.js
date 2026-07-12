
import Student from '../models/student.js';
//-------------------Read All Students (getStudents())----------------------------------------
export async function getStudents(req,res){
    try{                                       //retrieves  full document
        const result=await Student.find();
        
                            
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------Get one  Student (getStudentById())---------------------------
export async function getStudentsById(req,res){
    try{
        const result=await Student.findById(req.params.id);
        if(!result)
        {
            return res.status(404).json({message:"Student not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//------------------------------------create new Student createStudent()-------------- 
export async function createStudent(req, res) {
    try {

        console.log(req.body);
        const result = new Student (req.body);

        await result.save();
        return res.status(201).json(application);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};
//---------------------Update Student  (updateStudent())---------------------------------------

export async function updateStudent(req, res) {
    try {

        console.log(req.body);
        const application = await Application.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,});
         
        //await application.save();
        return res.status(200).json(application);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};

//----------------Delete SStudent function (deleteStudent())--------------------------------------------
export async function deleteStudent(req, res) {
    try {
        console.log(req.body);
        const result = await Student.findByIdAndDelete(req.params.id);
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
