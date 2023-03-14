import './App.css';

function App() {

  const Main = () => {

    return <div>
      <main>
      <h1>complementary colors</h1>

      <h2>First color:</h2>
      <div class='colorArea'></div>

      <h2>First color:</h2>
      <div class='colorArea' id='colorCompArea'></div>
      </main>

    </div>
  }

  return (

    <div className="App">
      <Main />
    </div>
  );
}

export default App;
