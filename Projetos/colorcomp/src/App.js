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
      <h1 style={{color: blackTheme ? 'white' : 'black'}}>Font color comparator</h1>
        
        
      <h2 style={{color: blackTheme ? 'white' : 'black'}}>First color:</h2>
      <div class='colorArea' onClick={openColorPicker} style={{background: color, border: blackTheme ? '1px solid white' : '1px solid black'}}></div>

          {colorPicker ? <ColorPicker color={color} setColor={setColor} function={openColorPicker}/> : ''}
          

      <h2 style={{color: blackTheme ? 'white' : 'black'}}>Complementary color:</h2>
      <div class='colorArea' id='colorCompArea' style={{border: blackTheme ? '1px solid white' : '1px solid black'}}></div>
  <br></br>
    <div class='colorAreaLorem' id='blackFont' style={{background: color}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div> <div class='colorAreaLorem' id='whiteFont' style={{background: color}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>

      </main>

    </div>
  }

  const ColorPicker = (props) => {
    return <div id='colorPicker'>

      <SketchPicker 
          color={props.color}
          onChange={ (color) => {props.setColor(color.hex)}}
        />
        <button style={{width: '75px'}} onClick={props.function}>OK</button>
    </div>
  }


  const [blackTheme, setBlackTheme] = useState(true)

  const [backColor, setBackColor] =  useState('#141216')
  const changeBackBlack = () => {
    setBackColor('black')
    setBlackTheme(true)
  }
  const changeBackWhite = () => {
    setBackColor('white')
    setBlackTheme(false)
  }
  document.body.style.background = backColor
  return (
    
    <div className="App">

      <div id='backIcons'>

          <div id='black' style={{width: '20px', height: '20px', background: 'black', position: 'absolute', left: '10px', top: '50px', border: '1px solid white', borderRadius: '5px', cursor: 'pointer'}} onClick={changeBackBlack}></div>
          <div id='white' style={{width: '20px', height: '20px', background: 'white', position: 'absolute', left: '10px', top: '80px', border: '1px solid black', borderRadius: '5px', cursor: 'pointer'}} onClick={changeBackWhite}></div>
        </div>
            <Main />
    </div>
  );
}

export default App;
