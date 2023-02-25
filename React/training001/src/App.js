import './App.css';
//import {Colors} from './Colors.js'
import { useState } from 'react'
function App() {

{/* VER AGORA ONDE DEVO APLICAR O USESTATE
Muito cuidado para não errar isso logo no
início */}

const Select = () => {
  return <div>
  <h1 style={{color: Text}}>Selecione a cor</h1>
  </div>
}

const [Text, setTextColor] = useState('black')

const changeColor = (color) => { 
  setTextColor(color)
  console.log(Text)
}

  return (
    <div className="App">
      
      <Select />
    <div>
      <h2 style={{color:'red'}} onClick={() => changeColor('red')}>Red</h2>
        <h2 style={{color:'blue'}} onClick={() => changeColor('blue')}>Blue</h2>
        <h2 style={{color:'green'}} onClick={() => changeColor('green')}>Green</h2>
        <h2 style={{color:'purple'}} onClick={() => changeColor('purple')}>Purple</h2>
        <h2 style={{color:'pink'}} onClick={() => changeColor('pink')}>Pink</h2>

        </div>
      </div>
    
  );
}

export default App;
