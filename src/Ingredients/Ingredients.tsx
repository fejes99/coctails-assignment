import { Route, Routes } from 'react-router';
import './Ingredients.css';
import IngredientDetails from './components/IngredientDetails/IngredientDetails';
import IngredientsList from './components/IngredientsList/IngredientsList';

const Ingredients: React.FC = () => {
  return (
    <>
      <div className='ingredients-search'>
        <h1 className='ingredients-title'>Ingredients</h1>
      </div>
      <Routes>
        <Route path='/' element={<IngredientsList />} />
        <Route path=':id' element={<IngredientDetails />} />
      </Routes>
    </>
  );
};

export default Ingredients;
