import './App.css';
import { useState } from "react";

function App() {
 
  let [bulb, setBulb] = useState(false)


  let onToggle = () => {
    setBulb(!bulb)
  }
  return (
    <body>
      <div className="toggle-container">
        {
          bulb && <div className='imgdiv'> <img className='bulb' src="https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png" alt="Bulb" /> </div>
        }
        {
          !bulb && <div className='imgdiv'> <img className='bulb' src="https://www.freeiconspng.com/uploads/bulb-off-icon-3.png" alt="Bulb" /> </div>
        }
        <input onClick={onToggle} id='toggle' type="checkbox" className="toggle-input" />
        <label for="toggle" className="toggle-label">
          <span className="toggle-slider"></span>
        </label>
      </div>
    </body>

  );
}

export default App;
