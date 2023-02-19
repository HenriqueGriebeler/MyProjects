import './App.css';

const age = 17
const isRed = false

function App() {
  return (
    <div className="App">
      <p style={{color: isRed ? "red" : "lightblue"}}>{age >= 18 ? "OVER AGE" : "UNDER AGE"}</p>
    </div>
  );
}

export default App;
