import Loader from '../../../components/Loader/Loader';
import { useFetchIngredientById } from '../../hooks/useFetchIngredients';
import IngredientCocktails from '../IngredientCocktails/IngredientCocktails';
import './IngredientDetails.css';

const IngredientDetails: React.FC = () => {
  const { ingredient, loading } = useFetchIngredientById();

  if (loading) return <Loader />;

  return (
    <>
      <div className='ingredient-details'>
        <div className='ingredient-data'>
          <div className='ingredient-title'>{ingredient?.strIngredient}</div>
          <div className='detail-rows'>
            <img
              src={`https://www.thecocktaildb.com/images/ingredients/${ingredient?.strIngredient}.png`}
              alt='Ingredient'
              className='ingredient-img'
            />
            <div className='detail-columns'>
              <div className='ingredient-alcohol'>
                <strong>Alcohol: </strong>
                {ingredient?.strAlcohol === 'Yes' && ingredient?.strABV !== null
                  ? `${ingredient?.strABV}‰`
                  : ingredient?.strAlcohol}
              </div>
              <div className='ingredient-type'>
                <strong>Type: </strong> {ingredient?.strType}
              </div>
              {ingredient?.strDescription ? (
                <div className='ingredient-description'>
                  <strong>Description: </strong>
                  {ingredient?.strDescription}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <IngredientCocktails id={ingredient?.strIngredient || ''} />
    </>
  );
};

export default IngredientDetails;
