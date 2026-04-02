import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"title is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },

},
{timestamps:true}
);

export const Note = mongoose.model("Note", noteSchema);