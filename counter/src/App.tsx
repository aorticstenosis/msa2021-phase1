import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter/counter";
import padlock from "./images/padlock.png";

function App() {
  
  return <div className="App">
    <table>
      <tr>
        <td rowSpan={3}><img alt="padlock" src={padlock} className="image" /></td>
        <td>
          <table>
            <tr>
              <td>
                <Counter counterTitle={""} />
              </td>
            </tr>
            <tr>
              <td>
                <Counter counterTitle={""} />
              </td>
            </tr>
            <tr>
              <td>  
            <Counter counterTitle={""} />
              </td>
            </tr>  
          </table>
        </td>
    </tr>
    </table>
 
       
  </div>
}

export default App;
