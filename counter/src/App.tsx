import React from 'react';
import './App.css';
import PadlockTable from './components/counter/padlockTable';


function App() {
  const password = "000"
  
  return <div className="App">
    <h3>Choose the password to unlock!</h3>
    <PadlockTable />
  </div>
}

export default App;
