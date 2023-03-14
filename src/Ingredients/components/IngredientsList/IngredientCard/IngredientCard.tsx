import { useNavigate } from 'react-router';
import { Ingredient } from '../../../Ingredients.d';
import './IngredientCard.css';

type Props = {
  ingredient: Ingredient;
};

const IngredientCard: React.FC<Props> = ({
  ingredient: { idIngredient: id, strIngredient: name, strType: type, strAlcohol: alcohol },
}) => {
  const navigate = useNavigate();

  const navigateToIngredient = (): void => navigate(`${id}`);

  return (
    <div className='ingredient-card' onClick={navigateToIngredient}>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
        alt='Ingredient'
        className='ingredient-card-img'
      />
      <div className='ingredient-card-name'>{name}</div>
      <div className='ingredient-card-data'>
        {type && (
          <div className='ingredient-card-type'>
            <strong>Type:</strong> {type}
          </div>
        )}
        {alcohol && (
          <div className='ingredient-card-alcohol'>
            <strong>Alcohol:</strong> {alcohol}
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientCard;
