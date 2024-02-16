import React from 'react';
import './App.css';
import data from './data/data';
import { Listing } from './components/Listing';

function App() {
  console.log(data);
  
  return (
    <Listing item={data}/>
  );
}

export default App;
