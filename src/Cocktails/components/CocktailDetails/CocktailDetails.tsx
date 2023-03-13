import './CocktailDetails.css';
import Loader from '../../../components/Loader/Loader';
import { useFetchCocktail } from '../../hooks/useFetchCocktails';

interface StringKeyObject {
  [key: string]: any;
}

const CocktailDetails: React.FC = () => {
  const { cocktail, loading } = useFetchCocktail();

  const renderIngredients = (cocktail: StringKeyObject) => {
    const ingredients = [];
    let i = 1;
    while (cocktail[`strIngredient${i}`]) {
      const ingredientName = cocktail[`strIngredient${i}`];
      const ingredientMeasure = cocktail[`strMeasure${i}`];
      ingredients.push(
        <div key={i} className='cocktail-ingredient-name'>
          {ingredientName} {ingredientMeasure}
        </div>
      );
      i++;
    }
    return (
      <div className='cocktail-ingredients'>
        <div className='cocktail-ingredients-title'>Ingredients:</div>
        {ingredients}
      </div>
    );
  };

  if (loading) return <Loader />;
  return (
    <div className='cocktail-details'>
      <h3 className='cocktail-title'>{cocktail?.strDrink}</h3>
      <div className='cocktail-type'>{cocktail?.strAlcoholic}</div>
      <div className='cocktail-rows'>
        <div className='cocktail-category'>
          <strong>Category:</strong> {cocktail?.strCategory}
        </div>
        <div className='cocktail-glass'>
          <strong>Glass:</strong> {cocktail?.strGlass}
        </div>
      </div>
      <div className='cocktail-rows'>
        <img src={cocktail?.strDrinkThumb} alt='Cocktail' className='cocktail-img' />
        <div className='cocktail-columns'>
          <div className='cocktail-preparation'>
            <strong>Preparation:</strong> {cocktail?.strInstructions}
          </div>
          {cocktail ? renderIngredients(cocktail) : null}
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
