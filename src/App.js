import logo from './logo.svg';
import './App.css';
import React,{useContext,useEffect} from 'react';
import {AppContext} from './contexts/context'

function App() {
  const {data,getIP} = useContext(AppContext)
  useEffect(()=>{
    getIP()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
