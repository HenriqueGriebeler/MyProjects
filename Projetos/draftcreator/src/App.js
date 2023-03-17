import { useState , useEffect } from 'react'
import './App.css';

function App() {
  
  const [mousePosition, setMousePosition] = useState({})
  const [id, setId] = useState([0])
  const paintCircle = () => {
  
    setId([mousePosition])

  console.log(id)
}

const handleMouseMove = (event) => {
  setMousePosition({x: event.clientX, y: event.clientY})
}
window.addEventListener('mousemove', handleMouseMove)

  return (
    <div className="App" onClick={paintCircle} style={{color: 'white'}}>
      The mouse position is ({mousePosition.x} , {mousePosition.y})
    </div>
  );
}

export default App;