import logo from './logo.svg';
import './App.css';
import Comment from './Comment'; // import a Comment component just made
import React from 'react';

// Assume that below data is from server
const commentsFromServer = [        
  {id:1, name:"Jake", content:"Jake is learning React essentials"},
  {id:2, name:"Elice", content:"Elice is learning Artifical intelligence"},
  {id:3, name:"Smith", content:"Smith is working remote at home"},
  {id:4, name:"Brown", content:"Brown is studying blockchain"}
];

// create a App class componenet to set state
class App extends React.Component {

  constructor(props) {
    super(props);

    // store an object in this.state (state == Javascript object, data)
    this.state = {
      comments: [],
    };
  }

  // componentDidMount mehtod is called when componet finished mounting(created). 
  componentDidMount() {
    let comments = this.state.comments;
    let count = 0; 

    let addComment = setInterval(()=>{
      if (count < commentsFromServer.length) {
        comments.push(commentsFromServer[count]); 
        count++;

        // use only setState method to change state. React will recognize that data is changed 
        //only with the setState method. 
        this.setState({
          comments:comments
        })
        
      } else {
        clearInterval(addComment);
      }
    },1000);

  }


  render() {

    const { comments } = this.state;

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
                <Comment 
                key={comment.id} 
                id={comment.id} 
                name={comment.name} 
                content={comment.content}
                />
              )
            })
          }
  
        </div>
  
      </div>
    );
  }
  }

export default App;
