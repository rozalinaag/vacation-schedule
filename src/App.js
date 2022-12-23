import './App.css';
import Vacation from './components';
import './assets/styles/index.scss';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Main from './pages/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Vacation />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
