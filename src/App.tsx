import React from 'react';
import './App.css';
import data from './data/data';
import { Listing } from './components/Listing';


function App() { 
  return (
    <Listing item={data}/>
  );
}

export default App;
