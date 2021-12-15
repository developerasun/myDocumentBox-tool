import logo from './logo.svg';
import './App.css';
import { useMyHook } from './useMyHook'

function App() {
  return (
    <div className="App">
      <h1>My First Custom Hook!</h1>
      {useMyHook()}
    </div>
  );
}

export default App;
