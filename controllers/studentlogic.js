//-----------Student Collection Controller Logic------------------------------
import Student from '../models/student.js';

//------------GET-------Read All Students (getStudents())--------------------
// ----------------------http://localhost:3000/students	--------------------
export async function getStudents(req,res){
    try{                                       //retrieves  full document
        const result=await Student.find();
        
                            
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------Get one  Student (getStudentById())-----------------------
// --------------------http://localhost:3000/students/:id-----------------------

export async function getStudentsById(req,res){
    try{
        const result=await Student.findById(req.params.id);
        if(result.length===0)
        {
            return res.status(404).json({message:"Student not found"});
        }
        res.json(result);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
//-------------------POST----create new Student createStudent()---------------------
// -------------------------http://localhost:3000/students---------------------- 

export async function createStudent(req, res) {
    try {

        console.log(req.body);
        const result = new Student (req.body);
        await result.save();
        return res.status(201).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};
//---------------PATCH------Update Student  (updateStudent())----------------------------------
// -----------------------------http://localhost:3000/students/:id------------------------

export async function updateStudent(req, res) {
    try {

        console.log(req.body);
        const result = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,});
        if (result.length===0) {
            res.status(404).send("Student not found");}
        else 
          return res.status(200).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }

};

//--------DELETE--------Delete Student function (deleteStudent())-------------------------
// -------------------http://localhost:3000/students/:id-----------------------------------
export async function deleteStudent(req, res) {
    try {
        console.log(req.body);
        const result = await Student.findByIdAndDelete(req.params.id);
        if (result.length===0) {
            res.status(404).send("Student not found");
        }
        else{
            res.status(200).json(result);
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}
