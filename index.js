import 'dotenv/config';
import connectDB from './db/conn.js';
import  seed  from './routes/seed.js';
import applications from './routes/applications.js';
import students from './routes/students.js';
import colleges from './routes/colleges.js';
import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();


connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the College Application Tracker.");
});
app.get("/test",(req,res)=>{
    res.send("route is working");
});
app.use("/applications", applications);
app.use("/students",students);
app.use("/colleges",colleges);
app.use("/seed",seed)

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});