const express=require("express");
const cors=require("cors");
const pool =require('./db');


const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());



app.post("/todos",async(req,res)=>{
try {
 
  const {title}=req.body

  const postingquery= await pool.query("INSERT INTO todos (title) values($1) RETURNING *",[title])
  res.json(postingquery)
  console.log(postingquery)
} catch (err) {
  console.log(err.message)
}
})


app.get("/todos",async(req,res)=>{
try {

  const getall=await pool.query("SELECT * FROM todos")
  res.json(getall.rows)
} catch (err) {
  console.log(err.message)
}
})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});