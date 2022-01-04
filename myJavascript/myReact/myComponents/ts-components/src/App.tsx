import './App.css';
import { Greetings } from './components/greetings';
import { LoginForm } from './components/login'; 
import { LoginTest } from './components/state/login'
import { Person } from './components/person';
import { PersonList } from './components/personList'
import { Status } from './components/status'
import { Heading } from './components/heading'
import { Oscar } from './components/oscar'
import { Button } from './components/button'
import { Input } from './components/input'
import { Container } from './components/cssProps'
import { ThemeContextProvider } from './components/context/themeContext'
import { Box } from './components/context/box'
import { UserContextProvider } from './components/context/userContextProvider'
import { UserContextUser } from './components/context/userContext'
import { ClassCounter } from './components/class/counter'
import { Private } from './components/componentProp/private'
import { Profile } from './components/componentProp/profile';

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
      
      <section>
        <Container styles={{"backgroundColor" : "lightblue"}}/>
      </section>

      <section>
        <LoginTest />
      </section>

      <section>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </section>

      <section>
        <UserContextProvider >
          <UserContextUser />
        </UserContextProvider>
      </section>

      <section>
        < ClassCounter message='hello'/>
      </section>

      <section>
        <Private isLoggedIn={true} component={Profile} />
      </section>
    </div>
  );
}

export default App;
