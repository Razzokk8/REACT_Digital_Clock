import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        World Digital Clock Component
        </p>
      </header>
      <Clock country={"Germany"} timezone={0}/>
    </div>
  );
}

export default App;
