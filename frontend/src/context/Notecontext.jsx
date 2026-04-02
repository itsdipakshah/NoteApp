import { children, createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url.js";


export const Notecontext = createContext();

export const NoteProvider = ({children}) => {
    const [notes ,setnotes] = useState([]);
const [loading ,setloading] = useState(true);

//fetch data from backend and pass it to the children component
const getNotes = async () =>{
    setloading(true);
    try {
        const res = await BACKEND_URL.get("/allnote");
        console.log("Full response data:", res.data);
        if (res.data.notes) {
            setnotes(res.data.notes);
        } 
        else if (res.data.data) {
            setnotes(res.data.data);
        }
        else {
            setnotes(res.data);
        }
    } catch (error) {
        console.error("Error fetching notes:", error);
    } finally {
        setloading(false);
    }
 }
 useEffect(() => {
    getNotes();
 },[])

//create a function to add a note to the database
const addNote = async (noteData) => {
    try {
        const res = await BACKEND_URL.post("/add", noteData);
        const data = res.data.note || res.data.data || res.data;
        setnotes((prev) => [...prev, data]);
    } catch (error) {
        console.error(error);
    }
};

const deleteNote = async (id) => {
    try {
        await BACKEND_URL.delete(`/delete/${id}`);
        setnotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
        console.error(error);
    }
};

const updateNote = async (id, updatedFields) => {
    try {
        const res = await BACKEND_URL.put(`/update/${id}`, updatedFields);
        const updatedNote = res.data.note || res.data;
        setnotes((prev) =>
            prev.map((note) => (note._id === id ? { ...note, ...updatedNote } : note))
        );
    } catch (error) {
        console.error(error);
    }
};

return (
    <Notecontext.Provider value={{ notes, loading, addNote, deleteNote, updateNote }}>
        {children}
    </Notecontext.Provider>
);
}