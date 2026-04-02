import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NoteProvider } from "./context/Notecontext.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NoteProvider>
     <App />
  </NoteProvider>
  </BrowserRouter>,
)
