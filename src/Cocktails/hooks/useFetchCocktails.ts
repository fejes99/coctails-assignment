import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('name');
    const firstLetter = searchParams.get('firstLetter');
    const category = searchParams.get('category');
    const glass = searchParams.get('glass');
    const alcohol = searchParams.get('alcohol') as CocktailType;

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
      axios
        .get(url)
        .then((response) => setResult({ cocktails: response.data.drinks, loading: false }));
    } else {
      setResult({ cocktails: null, loading: false });
    }
  }, [searchParams]);

  return result;
};

export const useFetchCocktail = () => {
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
