import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Cocktails from './pages/Cocktails/Cocktails';
import Ingredients from './pages/Ingredients/Ingredients';
import CocktailDetails from './components/CocktailDetails/CocktailDetails';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />\
          <Route path='cocktails' element={<Cocktails />}>
            <Route path=':id' element={<CocktailDetails />} />
          </Route>
          <Route path='ingredients' element={<Ingredients />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
