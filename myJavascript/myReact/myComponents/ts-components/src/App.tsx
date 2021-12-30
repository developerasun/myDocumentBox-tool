import React from 'react';
import './App.css';
import { Greetings } from './components/greetings';
import { LoginForm } from './components/login'; 
import { Person } from './components/person';
import { PersonList } from './components/personList'
import { Status } from './components/status'

function App() {
  return (
    <div className="App">
      <header>
        <LoginForm />
      </header>
      <main>
        <Greetings 
          name={"jake"} messageCount={50} />
        <Person 
          name={"jake"} age={27} nation='South Korea' />
        <PersonList />

        <Status status='loading'/>
      </main>
    </div>
  );
}

export default App;
