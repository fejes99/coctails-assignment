import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Cocktail } from '../components/CocktailList/CocktailList';

type CocktailType = 'alcoholic' | 'non_alcoholic';

interface FetchCocktailsResult {
  cocktails: Cocktail[] | null;
  loading: boolean;
}

const useFetchCocktails = (): FetchCocktailsResult => {
  const [result, setResult] = useState<FetchCocktailsResult>({
    cocktails: null,
    loading: true,
  });
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const alcohol = path.substring(path.lastIndexOf('/') + 1) as CocktailType;

    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const firstLetter = searchParams.get('firstLetter');
    console.log('🚀 ~ file: useFetchCocktails.ts:27 ~ useEffect ~ firstLetter:', firstLetter);
    const category = searchParams.get('category');
    console.log('🚀 ~ file: useFetchCocktails.ts:28 ~ useEffect ~ category:', category);
    const glass = searchParams.get('glass');
    console.log('🚀 ~ file: useFetchCocktails.ts:30 ~ useEffect ~ glass:', glass);

    let url = '';

    if (name) {
      url = `/search.php?s=${name}`;
    } else if (firstLetter) {
      url = `/search.php?f=${firstLetter}`;
    } else if (category) {
      url = `/filter.php?c=${category}`;
    } else if (glass) {
      url = `/filter.php?g=${glass}`;
    } else if (alcohol) {
      url = `/filter.php?a=${alcohol}`;
    }

    if (url) {
      axios.get(url).then((response) => {
        setResult({ cocktails: response.data.drinks, loading: false });
        console.log(
          '🚀 ~ file: useFetchCocktails.ts:50 ~ axios.get ~ response.data.drinks:',
          response.data.drinks
        );
      });
    } else {
      setResult({ cocktails: null, loading: false });
      console.log('cocktails not updated');
    }
  }, [location]);

  return result;
};

export default useFetchCocktails;
