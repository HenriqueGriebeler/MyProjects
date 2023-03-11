import {useState} from "react"
import './App.css';



function App() {


const expand = () => {

  showChapter ? setShowChapter(false) : setShowChapter(true)

}
  const [showChapter, setShowChapter] = useState(false)

  const [page, setPage] = useState(0)
  const Main = () => {
    return <div>


      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />




      <div>
        <main>
          <div id='chapterFrame'></div>


          <h1>Dragon Ball #125 {showChapter ? <span class="material-symbols-outlined" onClick={expand}>expand_less</span> : <span class="material-symbols-outlined" onClick={expand}>expand_more</span> }</h1>


          <p style={{margin: '10px'}}>{page}</p>

          {showChapter ? <ChapterFrame props={page}/> : ''}
          
        </main>
      </div>
    </div>
  }


const ChapterFrame = (props) => {
  console.log(props.props)
  const indexPage = props.props+1

  return <div>
    
      
    <img src={require('./manga/'+indexPage+'.png')}/>
  </div>
}


  return (
    <div className="App">
        <Main />
    </div>
  );
}





export default App;
