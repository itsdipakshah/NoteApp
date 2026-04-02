import React, { useContext, useState } from 'react'
import { Notecontext } from '../context/Notecontext'
import { useNavigate } from 'react-router-dom'

const NoteForm = () => {
  const { addNote } = useContext(Notecontext)
  const navigate = useNavigate()
  const [note, setNote] = useState({
    title: "",
    description: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!note.title || !note.description) return
    
    await addNote(note)
    setNote({ title: "", description: "" })
    navigate('/')
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">Create a New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter title..."
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Write your note here..."
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          rows="5"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-lg shadow-md"
        >
          Add Note
        </button>
      </form>
    </div>
  )
}

export default NoteForm