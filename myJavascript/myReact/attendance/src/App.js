import logo from './logo.svg';
import './App.css';
import './attendance'; 
import Attendance from './attendance';
import SignUp from './form/signup';
import Calculator from './temperature/calc';
import UserProfile from './profile/profile';
import UserProfileList from './profile/profileList';

function App() {
  return (
    <div>
      <UserProfileList ></UserProfileList>
      {/* <UserProfile /> */}
      {/* <Calculator /> */}
      {/* <SignUp></SignUp>
      <Attendance></Attendance> */}
    </div>
  );
}

export default App;
