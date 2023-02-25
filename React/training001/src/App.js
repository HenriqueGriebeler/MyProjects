import './App.css';
import {Colors} from './Colors.js'
import { useState } from 'react'
function App() {

{/* VER AGORA ONDE DEVO APLICAR O USESTATE
Muito cuidado para não errar isso logo no
início */}

const Select = () => {
  return <div>
  <h1>Selecione a cor</h1>
  </div>
}

const [Color, setColor] = useState('black')

const changeColor = () => { //PRECISO FAZER ESSE color RETORNAR A COR CLICADA EM CHANGECOLOR, assim que tiver isso vai funcionar...
  //setColor(color)
  
}

  return (
    <div className="App">
      
      <Select />

        <Colors changeColor={changeColor}/>

      </div>
    
  );
}

export default App;
