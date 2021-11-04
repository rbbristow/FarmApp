import logo from './favicon.png';
import './Stylesheet.css';

function Title() {
  return (
    <title className="Title">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            The farming app
        </p>
    </title>
  );
}

export default App;
