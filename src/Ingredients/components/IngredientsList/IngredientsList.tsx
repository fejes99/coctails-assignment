import './IngredientsList.css';
import Loader from '../../../components/Loader/Loader';
import { useFetchIngredients } from '../../hooks/useFetchIngredients';

import IngredientCard from './IngredientCard/IngredientCard';
import { Ingredient } from '../../Ingredients.d';

const IngredientsList: React.FC = () => {
  const { ingredients, loading } = useFetchIngredients();

  if (loading) return <Loader />;
  let ingredientCards: JSX.Element[] | null = null;
  ingredientCards =
    ingredients &&
    ingredients.map((ingredient: Ingredient) => {
      return <IngredientCard ingredient={ingredient} key={ingredient.idIngredient} />;
    });

  return <div className='ingredients-list'>{ingredientCards}</div>;
};

export default IngredientsList;
