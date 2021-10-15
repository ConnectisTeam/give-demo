const expres=require("express");

const app= expres();
app.get("/",(req,res)=>{
    res.send("welcom to Give-Demo");
});
let port= process.env.PORT||3232;
app.listen(port,()=>{
    console.log("welcom to give-demo");
});