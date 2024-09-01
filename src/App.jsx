import logo from './logo.svg';
import './App.css';
import onbuld from "./Assets/bulb on.png"
import offbuld from "./Assets/bulb off.png"
import { useState } from 'react';

function App() {
  const [isOn, setIsOn] = useState(false);

  function on_off() {
      setIsOn(!isOn);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={isOn ? onbuld : offbuld} alt="Bulb" />
        <button id="btn" onClick={on_off}>
          {isOn ? "OFF" : "ON"}
        </button>
      </header>
    </div>
  );
}

export default App;
