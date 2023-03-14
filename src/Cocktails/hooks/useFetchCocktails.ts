import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import Cocktail from '../Cocktails.d';

type CocktailType = 'alcoholic' | 'non_alcoholic';

interface FetchCocktailsResult {
  cocktails: Cocktail[] | null;
  loading: boolean;
}

interface FetchCocktailResult {
  cocktail: Cocktail | null;
  loading: boolean;
}

export const useFetchCocktails = (): FetchCocktailsResult => {
  const [result, setResult] = useState<FetchCocktailsResult>({
    cocktails: null,
    loading: true,
  });
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const alcohol = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1
    ) as CocktailType;
    const name = searchParams.get('name');
    const firstLetter = searchParams.get('firstLetter');
    const category = searchParams.get('category');
    const glass = searchParams.get('glass');

    let url = '';

    if (alcohol) url = `/filter.php?a=${alcohol}`;
    if (name) url = `/search.php?s=${name}`;
    if (firstLetter) url = `/search.php?f=${firstLetter}`;
    if (category) url = `/filter.php?c=${category}`;
    if (glass) url = `/filter.php?g=${glass}`;

    if (url) {
      axios
        .get(url)
        .then((response) => setResult({ cocktails: response.data.drinks, loading: false }));
    } else {
      setResult({ cocktails: null, loading: false });
    }
  }, [location.pathname, searchParams]);

  return result;
};

export const useFetchCocktail = (): FetchCocktailResult => {
  const [result, setResult] = useState<FetchCocktailResult>({
    cocktail: null,
    loading: true,
  });
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/lookup.php?i=${id}`)
      .then((response) => setResult({ cocktail: response.data.drinks[0], loading: false }));
  }, [id]);

  return result;
};
