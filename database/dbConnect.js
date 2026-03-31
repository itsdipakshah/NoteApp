import mongoose from "mongoose";
const dbConnect= ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"noteApp",
    }).then(()=>{
        console.log("Database is connected successfully!");
    }).catch(err=>{
        console.log("Some error is occured while connecting database!",err)
    });
};



export default dbConnect;