import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import {AppContext} from './contexts/context'
import { Route, Routes } from 'react-router-dom'
import Weather from './components/Weather'
import Main from './pages/Main'
import Projects from './pages/Projects'
import ProjectInfo from './pages/ProjectInfo'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from './pages/Project4'

function App() {
  const { data, getIP } = useContext(AppContext)
  useEffect(() => {
    getIP()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/ProjectInfo/:project" element={<ProjectInfo/>}/> */}
        <Route path="/Project1" element={<Project1 />}/>
        <Route path="/Project2" element={<Project2 />}/>
        <Route path="/Project3" element={<Project3 />}/>
        <Route path="/Project4" element={<Project4 />}/>
      </Routes>
    </div>
  );
}

export default App;
