import React from 'react';
import './App.css';
import Counter from "./components/counter/counter";
import PadlockTable from './components/counter/padlockTable';


function App() {
  const password = "000"
  
  return <div className="App">
    <PadlockTable />
  </div>
}

export default App;
