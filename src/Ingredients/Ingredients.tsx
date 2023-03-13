import { Route, Routes } from 'react-router';
import IngredientDetails from './components/IngredientDetails/IngredientDetails';
import IngredientsList from './components/IngredientsList/IngredientsList';

const Ingredients: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<IngredientsList />} />
        <Route path=':id' element={<IngredientDetails />} />
      </Routes>
    </>
  );
};

export default Ingredients;
