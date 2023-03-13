import { Ingredient } from '../../../Ingredients.d';
import './IngredientCard.css';

type IngredientCardProps = {
  ingredient: Ingredient;
};

const IngredientCard: React.FC<IngredientCardProps> = ({
  ingredient: {
    idIngredient: id,
    strIngredient: name,
    strType: type,
    strAlcohol: alcohol,
    image = '',
  },
}) => {
  return (
    <div className='ingredient-card'>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
        alt='Ingredient'
        className='ingredient-card-img'
      />
      <div className='ingredient-card-name'>{name}</div>
      <div className='ingredient-card-data'>
        <div className='ingredient-card-type'>
          <strong>Type:</strong> {type}
        </div>
        <div className='ingredient-card-alcohol'>
          <strong>Alcohol:</strong> {alcohol}
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;
