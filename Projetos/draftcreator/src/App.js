import { useState , useEffect } from 'react'
import './App.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function App() {
  


  const [clickedPoints, setClickedPoints] = useState([])

  const paintClick = (event) => {

    const {clientX, clientY} = event
  setClickedPoints([...clickedPoints, {clientX, clientY}])
  console.log(clickedPoints)

}
  function undo() {
    
    const newClickedPoints = [...clickedPoints]
    newClickedPoints.pop()
    setClickedPoints(newClickedPoints)

  }

  return (

    <div className="App" onClick={paintClick} style={{color: 'white'}}>

    
      {clickedPoints.map((clickedPoints) => {
        return <div style={{position: 'absolute', left: clickedPoints.clientX-4, top: clickedPoints.clientY-4, backgroundColor: 'lightgreen', width: '8px', height: '8px', borderRadius: '50%', cursor: 'default'}}></div>
      })}

<button style={{backgroundColor: 'black', border: 'none'}} onClick={undo}><img src={require('./images/undo.png')} style={{cursor: 'pointer'}}></img></button>

<button style={{background: 'black', border: 'none'}}><img src={require('./images/redo.png')} style={{cursor: 'pointer', marginLeft: '2px'}}></img></button>

      
    </div>
  );
}

export default App;