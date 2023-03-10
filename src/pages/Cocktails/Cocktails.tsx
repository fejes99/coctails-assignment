import { Navigate, Routes, Route } from 'react-router-dom';
import CocktailDetails from '../../components/CocktailDetails/CocktailDetails';
import CocktailList from '../../components/CocktailList/CocktailList';
import CocktailsFilter from '../../components/CocktailsFilter/CocktailsFilter';
import './Cocktails.css';

const Cocktails: React.FC = () => {
  return (
    <div>
      <div className='cocktails'>
        <h1 className='cocktails-title'>Cocktails</h1>
        <h2 className='cocktails-subtitle'>Over 150 cocktails to choose</h2>
        <CocktailsFilter />
      </div>
      <Routes>
        <Route path='/' element={<Navigate to='alcoholic' />} />
        <Route path='alcoholic' element={<CocktailList />} />
        <Route path='non_alcoholic' element={<CocktailList />} />
        <Route path=':id' element={<CocktailDetails />} />
      </Routes>
    </div>
  );
};

export default Cocktails;
