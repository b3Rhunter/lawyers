import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import  Articles  from './components/AllPosts';
import Singles from './components/OnePost';
import { Home } from './components/Home/Home';
import { Directory } from './components/Directory/Directory';
import { ApplicationForm } from './features/applicationForm/ApplicationForm';



function App() {
  return (
    <div className='app-container bg'>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="directory" element={<Directory />} />

        <Route path="articles" element={<Articles />} />
        <Route path="/:slug" element={<Singles />} />
      </Routes>
 
      <ApplicationForm />
    </div>
  );
}

export default App;
