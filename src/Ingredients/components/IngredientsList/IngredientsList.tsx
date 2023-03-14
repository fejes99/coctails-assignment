import { useState } from 'react';

import './IngredientsList.css';
import Loader from '../../../components/Loader/Loader';
import { useFetchIngredients } from '../../hooks/useFetchIngredients';
import IngredientCard from './IngredientCard/IngredientCard';
import { Ingredient } from '../../Ingredients.d';
import Search from '../../../components/Search/Search';
import { ingredientsFilter } from '../../helpers/IngredientsFilter';

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
