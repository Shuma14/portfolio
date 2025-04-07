import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom'
import Skills from './Components/Skills'
import Experience from './Components/Experience.jsx'
import Resume from './Components/Resume.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import Home from './Components/Home.jsx'
import RootLayout from './Layout/RootLayout.jsx'

const RedirectToResume = () => {
  
  window.open(
    'https://drive.google.com/file/d/1-V3jbxCuOKgRbtRchSCOkYnWLTPVi9XJ/view', 
    '_blank', 
    'noopener,noreferrer'
  );

  
  return null;
};

const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
         <Route index element={<Home/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='experience' element={<Experience/>}/>
        <Route path='resume' element={<Resume/>}/>
        <Route path='contact' element={<Contact/>}/>
    </Route>
  ),
  { basename: "/portfolio" }
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
