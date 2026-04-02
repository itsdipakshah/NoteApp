import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-400 py-4 border-t border-gray-800">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">NoteApp</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer