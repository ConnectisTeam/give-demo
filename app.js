import  expres from 'express';

const app= expres();
app.get("/",(req,res)=>{
    res.send("welcom to Give-Demo");
});

export default app;