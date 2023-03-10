import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Cocktails from './Cocktails/Cocktails';
import Ingredients from './Ingredients/Ingredients';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
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
