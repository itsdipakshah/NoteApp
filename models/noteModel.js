import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"title is required"],
        unique:true,
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },
    
});

export const Note = mongoose.model("Note", noteSchema);