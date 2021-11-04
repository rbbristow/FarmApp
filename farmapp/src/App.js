import logo from './favicon.png';
import './Stylesheet.css';

function App() {
  return (
    <div className="App">
      <div className="Title">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
              The farming app
        </div>
      </div>
    </div>
  );
}

export default App;
