import express from "express";

import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/noteController.js";

const router = express.Router();

router.post("/add",createNote);
router.get("/allnote",getAllNotes);
router.get("/get/:id",getNoteById);
router.put("/update/:id",updateNote);
router.delete("/delete/:id",deleteNote);


export default router;