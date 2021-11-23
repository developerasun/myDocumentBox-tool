import logo from './logo.svg';
import './App.css';
import Comment from './Comment'; // import a Comment component just made

const comments = [
  {name:"Jake", content:"Jake is learning React essentials"},
  {name:"Elice", content:"Elice is learning Artifical intelligence"},
  {name:"Smith", content:"Smith is working remote at home"}
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* call the Comment component */}
      <div className="comment">
        {
          comments.map((comment)=>{
            return (
              <Comment name={comment.name} content={comment.content}/>
            )
          })
        }

      </div>

    </div>
  );
}

export default App;
