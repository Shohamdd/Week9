import './App.css';
import Counter from "./components/Counter";
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
