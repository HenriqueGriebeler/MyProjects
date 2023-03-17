import { useState , useEffect } from 'react'
import './App.css';

function App() {
  
  const [mousePosition, setMousePosition] = useState({})
  const paintCircle = () => {
    
  console.log(mousePosition)
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
