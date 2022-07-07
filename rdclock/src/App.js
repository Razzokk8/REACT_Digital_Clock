import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        World Digital Clock Component
        </p>
      </header>
      <Clock country={"Berlin"} timezone={0}/>
    </div>
  );
}

export default App;
