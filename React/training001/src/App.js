import './App.css';
import {Colors} from './Colors.js'
import { useState } from 'react'
function App() {

{/* VER AGORA ONDE DEVO APLICAR O USESTATE
Muito cuidado para não errar isso logo no
início */}

  return (
    <div className="App">
      <div>
        <h1>Select a color</h1>

        <Colors />

      </div>
    </div>
  );
}

export default App;
