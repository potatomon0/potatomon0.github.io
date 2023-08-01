import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import { AppContext } from './contexts/context'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { data, getIP } = useContext(AppContext)
  useEffect(() => {
    getIP()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Weather />
      </Routes>
    </div>
  );
}

export default App;
