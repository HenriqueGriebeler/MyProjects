import './App.css';
import { useState } from 'react'
import { SketchPicker } from 'react-color';

function App() {

  const Main = () => {

    const[color, setColor] = useState('#ffffff')
    const[colorPicker, showColorPicker] = useState(false)

const openColorPicker = () => {
  colorPicker ? showColorPicker(false) : showColorPicker(true)
}
    



    return <div>
      <main>
      <h1>complementary colors</h1>
        

      <h2>First color:</h2>
      <div class='colorArea' onClick={openColorPicker} style={{background: color}}></div>

          {colorPicker ? <ColorPicker color={color} setColor={setColor} function={openColorPicker}/> : ''}
          

      <h2>Complementary color:</h2>
      <div class='colorArea' id='colorCompArea'></div>
      </main>

    </div>
  }













  const ColorPicker = (props) => {
    return <div id='colorPicker'>

      <SketchPicker 
          color={props.color}
          onChangeComplete={ (color) => {props.setColor(color.hex)}}
        />
        <button style={{width: '75px'}} onClick={props.function}>OK</button>
    </div>
  }

  return (

    <div className="App">
      <Main />
    </div>
  );
}

export default App;
