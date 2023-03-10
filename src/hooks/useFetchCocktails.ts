import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Cocktail } from '../components/CocktailList/CocktailList';

type CocktailType = 'alcoholic' | 'non_alcoholic';

interface FetchResult {
  cocktails: Cocktail[] | null;
  loading: boolean;
}

const useFetchCocktails = (): FetchResult => {
  const [result, setResult] = useState<FetchResult>({
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
    const category = searchParams.get('category');
    const glass = searchParams.get('glass');

    let url = '';

    if (name) {
      url = `/search.php?s=${name}`;
    } else if (firstLetter) {
      url = `/search.php?f=${firstLetter}`;
    } else if (alcohol) {
      url = `/filter.php?a=${alcohol}`;
    } else if (category) {
      url = `/filter.php?c=${category}`;
    } else if (glass) {
      url = `/filter.php?g=${glass}`;
    }

    if (url) {
      axios.get(url).then((response) => {
        setResult({ cocktails: response.data.drinks, loading: false });
      });
    } else {
      setResult({ cocktails: null, loading: false });
    }
  }, [location]);

  return result;
};

export default useFetchCocktails;
