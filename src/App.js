import './App.css';
import Vacation from './components';
import './assets/styles/index.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Vacation />
      </div>
    </div>
  );
}

export default App;
