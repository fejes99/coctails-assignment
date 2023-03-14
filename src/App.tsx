import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cocktails from './Cocktails/Cocktails';
import Ingredients from './Ingredients/Ingredients';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header>
        <div className='header-wrapper'>
          <Navbar />
        </div>
      </header>
      <div className='main'>
        <Routes>
          <Route path='cocktails/*' element={<Cocktails />} />
          <Route path='ingredients/*' element={<Ingredients />} />
          <Route path='*' element={<Navigate to='/cocktails' replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
