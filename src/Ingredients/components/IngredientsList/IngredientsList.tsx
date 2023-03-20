import { useState } from 'react';

import './IngredientsList.css';
import { Ingredient } from '../../Ingredients.d';
import { useFetchIngredients } from '../../hooks/useFetchIngredients';
import { ingredientsFilter } from '../../helpers/IngredientsFilter';
import Loader from '../../../components/Loader/Loader';
import Search from '../../../components/Search/Search';
import IngredientCard from './IngredientCard/IngredientCard';

const IngredientsList: React.FC = () => {
  const [query, setQuery] = useState('');
  const { ingredients, loading } = useFetchIngredients();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setQuery(event.target.value);

  if (loading) return <Loader />;

  const ingrs: Ingredient[] = ingredientsFilter({ ingredients, query });

  let ingredientCards: JSX.Element[] =
    ingrs &&
    ingrs.map((ingredient: Ingredient) => {
      return <IngredientCard ingredient={ingredient} key={ingredient.idIngredient} />;
    });

  return (
    <>
      <div className='ingredients-search'>
        <Search onChange={handleSearch} />
      </div>
      {ingrs.length ? (
        <div className='ingredients-list'>{ingredientCards}</div>
      ) : (
        <h3 className='ingredients-warning'>No ingredients, please try again</h3>
      )}
    </>
  );
};

export default IngredientsList;
