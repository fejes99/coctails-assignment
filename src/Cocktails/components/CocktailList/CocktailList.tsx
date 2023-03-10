import './CocktailList.css';
import Loader from '../../../components/Loader/Loader';
import CocktailCard from './CocktailCard/CocktailCard';
import useFetchCocktails from '../../hooks/useFetchCocktails';

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory?: string;
  strGlass?: string;
  strDrinkThumb: string;
}

const CocktailList: React.FC = () => {
  const { cocktails, loading } = useFetchCocktails();

  if (loading) return <Loader />;
  if (!loading && !cocktails?.length)
    return <div>No cocktails for that filter, please try other one</div>;

  const cocktailCards: JSX.Element[] | null =
    cocktails &&
    cocktails.map((cocktail: Cocktail) => (
      <CocktailCard
        key={cocktail.idDrink}
        id={cocktail.idDrink}
        image={cocktail.strDrinkThumb}
        name={cocktail.strDrink}
        category={cocktail.strCategory}
        glass={cocktail.strGlass}
      />
    ));

  return <div className='cocktail-list'>{cocktailCards}</div>;
};

export default CocktailList;
