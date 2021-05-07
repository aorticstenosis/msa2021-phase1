import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter/counter";

function App() {
  return <div className="App">
    <Counter counterTitle={"Number of MSA Students"}/>
        <Counter counterTitle={"Number of MSPs"}/>
        <Counter counterTitle={"Number of Sheep"}/>
  </div>
}

export default App;
