import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

import './App.css';
import SerieDetails from './pages/SerieDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie-details'>
          <Route path=':id' element={<MovieDetails />} />
        </Route>
        <Route path='serie-details'>
          <Route path=':id' element={<SerieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
