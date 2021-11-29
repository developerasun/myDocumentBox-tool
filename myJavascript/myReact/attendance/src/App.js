import logo from './logo.svg';
import './App.css';
import './attendance'; 
import Attendance from './attendance';
import SignUp from './form/signup';
import Calculator from './temperature/calc';

function App() {
  return (
    <div>
      <Calculator />
      {/* <SignUp></SignUp>
      <Attendance></Attendance> */}
    </div>
  );
}

export default App;
