import CocktailCard from '../../../Cocktails/components/CocktailList/CocktailCard/CocktailCard';
import Loader from '../../../components/Loader/Loader';
import { useFetchIngredientCocktails } from '../../hooks/useFetchIngredientCocktails';
import './IngredientCocktails.css';

type Props = {
  id: string;
};

const IngredientCocktails: React.FC<Props> = ({ id }) => {
  const { cocktails, loading } = useFetchIngredientCocktails(id);

  if (loading) return <Loader />;

  return (
    <div className='ingredient-cocktails'>
      {cocktails?.map((cocktail) => (
        <CocktailCard cocktail={cocktail} />
      ))}
    </div>
  );
};

export default IngredientCocktails;
