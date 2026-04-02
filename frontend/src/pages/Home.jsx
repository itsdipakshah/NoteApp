import React, { useContext } from 'react'

import Navbar from '../components/Navbar';
import { Notecontext } from '../context/Notecontext';
import NoteCard from '../components/NoteCard';

const Home = () => {
  const { notes, loading } = useContext(Notecontext);

  if (loading) {
    return (
            <div className='flex justify-center items-center min-h-screen'>
              <p className='text-lg text-gray-700'>Loading notes...</p>
            </div>
    );
  }

 if(notes.length === 0) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'>No Notes Available</h1>
      <p className='text-gray-600'>You haven't created any notes yet. Start by adding a new note!</p>
    </div>
  );
 }
 
 return(
  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
    {notes.map(note => (
      <NoteCard key={note._id} note={note} />
    ))}
  </div>
 )

}
export default Home