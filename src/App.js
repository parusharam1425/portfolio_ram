import React, {useState} from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Nav/navbar';
import Details from './Components/Projects/Project';
import Project from './Components/Projects/AddDeatils';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {

  const [projects, setProjects] = useState([]);
  const addProject = (newProject) =>{
    setProjects([...projects, newProject])
  }
  return (
    <div className="App">
      <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about'element={<Details addProject={addProject}/>}/>
        <Route  path='/projects'element={<Project />}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/abouts'element={<About/>}/>
    

        
      </Routes>
      <Footer/>
    </Router>
    
      </>
    </div>
  );
}

export default App;
