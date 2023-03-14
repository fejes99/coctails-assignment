import CocktailCard from '../../../Cocktails/components/CocktailList/CocktailCard/CocktailCard';
import Loader from '../../../components/Loader/Loader';
import { useFetchIngredientCocktails } from '../../hooks/useFetchIngredientCocktails';
import './IngredientCocktails.css';

type Props = {
  id: string;
};

const IngredientCocktails = ({ id }: Props) => {
  const { cocktails, loading } = useFetchIngredientCocktails(id);
  console.log(
    '🚀 ~ file: IngredientCocktails.tsx:11 ~ IngredientCocktails ~ cocktails:',
    cocktails
  );

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
