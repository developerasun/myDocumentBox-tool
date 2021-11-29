import logo from './logo.svg';
import './App.css';
import './attendance'; 
import Attendance from './attendance';
import SignUp from './form/signup';

function App() {
  return (
    <div>
      <SignUp></SignUp>
      <Attendance></Attendance>
    </div>
  );
}

export default App;
