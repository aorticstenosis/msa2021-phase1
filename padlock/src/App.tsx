import React from 'react';
import './App.css';
import PadlockTable from './components/padlock/padlockTable';


function App() {
  return <div className="App">
    <h3>Input the password to unlock!</h3>
    <PadlockTable />
  </div>
}

export default App;
