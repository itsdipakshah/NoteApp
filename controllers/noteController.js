import { Note } from "../models/noteModel.js"


export const createNote = (async(req,res)=>{
     try {
        const { title, description,createdAt}=req.body;
     if(!title || !description ){
      return  res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
     }

     const newNote= await Note.create({title,description,createdAt});
     
      return res.status(201).json({
        success:true,
        message:"Note created successfully!",
        newNote,
     });
     } catch (error) {
      return res.status(500).json({
            success:false,
            message:"Failed to create note",
            error: error.message
        })
     }
});


export const getAllNotes =(async(req,res)=>{
    try {
      const notes = await Note.find();

      return res.status(200).json({
         success:true,
         message:"All notes are here!",
         notes,
      })
      
    } catch (error) {
      return res.status(500).json({
         success:false,
         message:"Failed to fetch all notes!",
         error:error.message,
      });
    }

});

export const updateNote = async (req, res) => {
  try {
   const {title ,description}=req.body;
   const {id} = req.params;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,          
        runValidators: true 
      }
    );

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note updated successfully",
      updatedNote,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update note",
      error: error.message,
    });
  }
};


export const deleteNote =(async(req,res)=>{
 try {
   const {id}= req.params;
   const deleteNote = await Note.findByIdAndDelete(id);

   if(!deleteNote){
      return res.status(400).json({
         success:false,
         message:"Note not Found!"
      })
   }

   return res.status(200).json({
      success:true,
      message:"Note deleted Successfully!",
      deleteNote
   });
   
 } catch (error) {
   return res.status(500).json({
      success:false,
      message:"Failed to delete note!",
      error:error.message
   });
 }
});