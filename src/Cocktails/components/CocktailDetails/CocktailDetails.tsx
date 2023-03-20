import { useNavigate } from 'react-router';

import './CocktailDetails.css';
import Loader from '../../../components/Loader/Loader';
import { useFetchCocktail } from '../../hooks/useFetchCocktails';

interface StringKeyObject {
  [key: string]: any;
}

const CocktailDetails: React.FC = () => {
  const navigate = useNavigate();
  const { cocktail, loading } = useFetchCocktail();

  const renderIngredients = (cocktail: StringKeyObject): JSX.Element => {
    const ingredients = Object.keys(cocktail)
      .filter((key) => key.startsWith('strIngredient'))
      .map((ingredientKey, i) => {
        const ingredientName = cocktail[ingredientKey];
        const ingredientMeasure = cocktail[`strMeasure${i + 1}`];
        return (
          <div key={i} className='cocktail-ingredient-name'>
            {ingredientName} {ingredientMeasure}
          </div>
        );
      });

    return (
      <div className='cocktail-ingredients'>
        <div className='cocktail-ingredients-title'>Ingredients:</div>
        {ingredients}
      </div>
    );
  };

  let typeUrl: string = cocktail?.strAlcoholic === 'Non alcoholic' ? 'non_alcoholic' : 'alcoholic';

  const navigateAlcohol = (): void => navigate(`/cocktails/${typeUrl}`);

  const navigateCategory = (): void =>
    navigate(`/cocktails/${typeUrl}?category=${cocktail?.strCategory}`);

  const navigateGlass = (): void => navigate(`/cocktails/${typeUrl}?glass=${cocktail?.strGlass}`);

  if (loading) return <Loader />;

  return (
    <div className='cocktail-details'>
      <h3 className='cocktail-title'>{cocktail?.strDrink}</h3>
      <div className='cocktail-type'>
        <span className='pointer-hover' onClick={navigateAlcohol}>
          {cocktail?.strAlcoholic}
        </span>
      </div>
      <div className='detail-rows'>
        <div className='cocktail-category'>
          <strong>Category:</strong>{' '}
          <span className='pointer-hover' onClick={navigateCategory}>
            {cocktail?.strCategory}
          </span>
        </div>
        <div className='cocktail-glass'>
          <strong>Glass:</strong>{' '}
          <span className='pointer-hover' onClick={navigateGlass}>
            {cocktail?.strGlass}
          </span>
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
