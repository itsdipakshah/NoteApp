import { Note } from "../models/noteModel.js"
// import ErrorHandler from "../middleware/error.js"
// import {catchAsyncError} from "../middleware/catchAsyncError.js"

export const createNote = (async(req,res)=>{
     try {
        const {title,description}=req.body;
     if(!title || !description){
        res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
     }
     const newNote= await Note.create({title,description});
     
     res.status(201).json({
        success:true,
        message:"Note created successfully!",
        newNote,
     });
     } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to create note",
        })
     }
});


export const getAllNotes =(async(req,res)=>{

});
export const getNoteById =(async(req,res)=>{

});
export const updateNote =(async(req,res)=>{

});


export const deleteNote =(async(req,res)=>{

});