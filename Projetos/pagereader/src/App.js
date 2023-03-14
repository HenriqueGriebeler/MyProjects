import {useState} from "react"
import './App.css';

function App() {

const expand = () => {
  showChapter ? setShowChapter(false) : setShowChapter(true)
}
  const allPages = 16 - 1 //ALWAYS PUT THE NUMBER AT THE LEFT

  const [showChapter, setShowChapter] = useState(false)

  const [page, setPage] = useState(0)

  const Main = () => {

    return <div>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

      <div>
        <main>
          <div id='chapterFrame'></div>
          
          <h1>Dragon Ball #125 {showChapter ? <span class="material-symbols-outlined" onClick={expand}>expand_less</span> : <span class="material-symbols-outlined" onClick={expand}>expand_more</span> }</h1>

          {showChapter ? <ChapterFrame props={page}/> : ''}
          
        </main>
      </div>
    </div>
  }

const ChapterFrame = (props) => {
  const indexPage = props.props+1
  let actualPage = props.props

const pageBack = () => {
  actualPage <= 0 ? actualPage=0 : setPage(actualPage-=1)
  }
const pageNext = () => {
  actualPage >=allPages ? actualPage=allPages : setPage(actualPage+=1)
  }

  return <div>
    
    <p style={{margin: '10px', fontSize: '1.8em'}}> <span class="material-symbols-outlined" onClick={pageBack} style={{color: actualPage <= 0 ? 'gray' : 'white'}}> arrow_back_ios </span>
    {indexPage} <span class="material-symbols-outlined" onClick={pageNext} style={{color: actualPage >= allPages ? 'gray' : 'white'}}> arrow_forward_ios </span></p>
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