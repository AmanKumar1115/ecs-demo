import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("Congratulation HHLD Folks, FIrs ttime ECS");
})

app.get("/health",(req,res)=>{
    res.status(200).send("ECS Demo is healthy")
});

app.listen(port,()=>{
    console.log("Server is listening at http:3000")
})