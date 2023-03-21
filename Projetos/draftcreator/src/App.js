import { useState , useEffect } from 'react'
import './App.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function App() {
  


  const [clickedPoints, setClickedPoints] = useState([])
  const [canPaint, setCanPaint] = useState(true)
  const [undoPoints, setUndoPoints] = useState([])

  const paintClick = (event) => {

    if(canPaint==true){
    const {clientX, clientY} = event
  setClickedPoints([...clickedPoints, {clientX, clientY}])
}

}
  const undo = () => {
    
    const undoPoint = clickedPoints.pop()
    setUndoPoints([...undoPoints, undoPoint])

  }
  const redo = () => {

    if(undoPoints.length > 0){
    const redoPoint = undoPoints.pop()
    setClickedPoints([...clickedPoints, redoPoint])
  }

  }

  const blockPaint = () => {
    setCanPaint(false)
  }
  const freePaint = () => {
    setCanPaint(true)
  }

  return (

    <div className="App" onClick={paintClick} style={{color: 'white'}}>

      <div id='paintableArea'>

      {clickedPoints.map((clickedPoints) => {
        return <div style={{position: 'absolute', left: clickedPoints.clientX-4, top: clickedPoints.clientY-4, backgroundColor: 'lightgreen', width: '8px', height: '8px', borderRadius: '50%', cursor: 'default'}}></div>
      })}
      
      </div>

<div style={{position: 'absolute', top: '1px'} } onMouseOver={blockPaint} onMouseOut={freePaint}>

  <button style={{backgroundColor: 'black', border: 'none'}} onClick={undo}><img src={require('./images/undo.png')} style={{cursor: 'pointer'}}></img></button>
  
  <button style={{background: 'black', border: 'none'}}><img src={require('./images/redo.png')} style={{cursor: 'pointer', marginLeft: '2px'}} onClick={redo}></img></button>

</div>

    </div>
  );
}

export default App;