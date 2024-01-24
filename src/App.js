import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import Lost from './components/Lost';
import Menu from './components/Menu';
import BaseRouter from './router';

function App() {
  return (
    <div className="App">
      <BaseRouter />
    </div>
  );
}

export default App;
