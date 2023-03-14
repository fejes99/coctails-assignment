import './CocktailList.css';
import Cocktail from '../../Cocktails.d';
import { useFetchCocktails } from '../../hooks/useFetchCocktails';
import Loader from '../../../components/Loader/Loader';
import CocktailCard from './CocktailCard/CocktailCard';

const CocktailList: React.FC = () => {
  const { cocktails, loading } = useFetchCocktails();

  if (loading) return <Loader />;
  if (!cocktails?.length)
    return <h3 className='empty-warning'>No cocktails for that filter, please try other one</h3>;

  let cocktailCards: JSX.Element[] =
    cocktails &&
    cocktails.map((cocktail: Cocktail) => (
      <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
    ));

  return <div className='cocktail-list'>{cocktailCards}</div>;
};

export default CocktailList;
