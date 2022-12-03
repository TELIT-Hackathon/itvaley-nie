import { AddToHomeScreen } from '@mui/icons-material';
import './App.css';
import Dashboard from './component/homeScreen';
import LogIn from './component/signIn.js';
import SignUp from './component/signUp.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Hello madafaka
        </a>
      </header> */}
      {/* <LogIn/> */}
      <SignUp/>
      {/*<Dashboard/>*/}
    </div>
  );
}

export default App;
