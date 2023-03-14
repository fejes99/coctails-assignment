import { Navigate, Routes, Route } from 'react-router-dom';
import CocktailDetails from './components/CocktailDetails/CocktailDetails';
import CocktailList from './components/CocktailList/CocktailList';
import CocktailsFilter from './components/CocktailsFilter/CocktailsFilter';

const Cocktails: React.FC = () => {
  return (
    <>
      <CocktailsFilter />
      <Routes>
        <Route path='/' element={<Navigate to='alcoholic' />} />
        <Route path='alcoholic' element={<CocktailList />} />
        <Route path='non_alcoholic' element={<CocktailList />} />
        <Route path=':id' element={<CocktailDetails />} />
      </Routes>
    </>
  );
};

export default Cocktails;
