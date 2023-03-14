import axios from 'axios';
import { useState, useEffect } from 'react';
import Cocktail from '../../Cocktails/Cocktails.d';

interface FetchIngredientCocktailsResult {
  cocktails: Cocktail[] | null;
  loading: boolean;
}

export const useFetchIngredientCocktails = (id: string): FetchIngredientCocktailsResult => {
  const [result, setResult] = useState<FetchIngredientCocktailsResult>({
    cocktails: null,
    loading: true,
  });

  useEffect(() => {
    axios
      .get(`/filter.php?i=${id}`)
      .then((response) => setResult({ cocktails: response.data.drinks, loading: false }));
  }, [id]);

  return result;
};
