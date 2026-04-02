import React, { useContext, useState } from 'react'
import { Notecontext } from '../context/Notecontext';

const NoteCard = ({note}) => {
    const{ deleteNote,updateNote}= useContext(Notecontext);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        title: note.title,
        description: note.description
    });

      const handleUpdate = () => {
        updateNote(note._id, editData);
        setIsEditing(false);
      } 

  return (
     <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col">
      {isEditing ? (
        <>
          
          <input
            type="text"
            className="border rounded-lg p-2 w-full mb-3 
                       focus:ring-2 focus:ring-blue-500 outline-none 
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
          <textarea
            className="border rounded-lg p-2 w-full mb-3 
                       focus:ring-2 focus:ring-blue-500 outline-none 
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white"
            rows="3"
            value={editData.description}
            onChange={(e) =>
              setEditData({ ...editData, description: e.target.value })
            }
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1.5 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {note.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            {note.description}
          </p>

          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>
              {new Date(note.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NoteCard