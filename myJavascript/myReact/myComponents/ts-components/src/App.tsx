import './App.css';
import { Greetings } from './components/greetings';
import { LoginForm } from './components/login'; 
import { Person } from './components/person';
import { PersonList } from './components/personList'
import { Status } from './components/status'
import { Heading } from './components/heading'
import { Oscar } from './components/oscar'
import { Button } from './components/button'
import { Input } from './components/input'

function App() {
  return (
    <div className="App">
      <header>
        <LoginForm />
        <Oscar>
          <Heading>Hello</Heading> 
        </Oscar>
      </header>
      <main>
        <Greetings 
          name={"jake"} messageCount={50} />
        <Person 
          name={"jake"} age={27} nation='South Korea' />
        <PersonList />

        <Status status='loading'/>

        <Greetings 
          name={"Brian"} messageCount={50} gender='male' />
        <Button handleClick={(event)=>{console.log("button clicked", event)}}></Button>

        <Input placeholder='Enter anything' handleChange={(event)=> console.log(event.target.value)} />
      </main>
    </div>
  );
}

export default App;
