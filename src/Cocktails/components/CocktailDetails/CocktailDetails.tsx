import './CocktailDetails.css';
import Loader from '../../../components/Loader/Loader';
import { useFetchCocktail } from '../../hooks/useFetchCocktails';
import { useNavigate } from 'react-router';

interface StringKeyObject {
  [key: string]: any;
}

const CocktailDetails: React.FC = () => {
  const navigate = useNavigate();
  const { cocktail, loading } = useFetchCocktail();

  const renderIngredients = (cocktail: StringKeyObject) => {
    const ingredients = [];
    let i = 1;
    while (cocktail[`strIngredient${i}`]) {
      const ingredientName = cocktail[`strIngredient${i}`];
      const ingredientMeasure = cocktail[`strMeasure${i}`];
      ingredients.push(
        <div key={i} className='cocktail-ingredient-name'>
          <span className='pointer-hover'>{ingredientName}</span> {ingredientMeasure}
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

  let typeUrl = cocktail?.strAlcoholic === 'Non alcoholic' ? 'non_alcoholic' : 'alcoholic';

  const navigateAlcohol = () => navigate(`/${cocktail?.strAlcoholic}`);

  const navigateCategory = () =>
    navigate(`/cocktails/${typeUrl}?category=${cocktail?.strCategory}`);

  const navigateGlass = () => navigate(`/cocktails/${typeUrl}?glass=${cocktail?.strGlass}`);

  if (loading) return <Loader />;
  return (
    <div className='cocktail-details'>
      <h3 className='cocktail-title'>{cocktail?.strDrink}</h3>
      <div className='cocktail-type pointer-hover' onClick={navigateAlcohol}>
        {cocktail?.strAlcoholic}
      </div>
      <div className='detail-rows'>
        <div className='cocktail-category' onClick={navigateCategory}>
          <strong>Category:</strong> <span className='pointer-hover'>{cocktail?.strCategory}</span>
        </div>
        <div className='cocktail-glass' onClick={navigateGlass}>
          <strong>Glass:</strong> <span className='pointer-hover'>{cocktail?.strGlass}</span>
        </div>
      </div>
      <div className='detail-rows'>
        <img src={cocktail?.strDrinkThumb} alt='Cocktail' className='cocktail-img' />
        <div className='detail-columns'>
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
