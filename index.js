import app from "./app";
import dotenv from "dotenv";
dotenv.config();
let port= process.env.PORT||3232;
app.listen(port,()=>{
    console.log("welcom to give-demo");
});