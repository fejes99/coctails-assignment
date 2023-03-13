import axios from 'axios';
import { useState, useEffect } from 'react';
import { Ingredient } from './../Ingredients.d';

interface FetchIngredientsResult {
  ingredients: Ingredient[] | null;
  loading: boolean;
}

export const useFetchIngredients = () => {
  const [result, setResult] = useState<FetchIngredientsResult>({
    ingredients: null,
    loading: true,
  });

  useEffect(() => {
    axios
      .get('/list.php?i=list')
      .then((response) => response.data.drinks)
      .then((ingredients) => {
        const promises = ingredients.map((ingredient: any) => {
          return fetchIngredient(ingredient?.strIngredient1).then((ingredientData) => {
            return {
              ...ingredient,
              ...ingredientData,
            };
          });
        });
        return Promise.all(promises);
      })
      .then((ingredientsWithData) => {
        setResult({ ingredients: ingredientsWithData, loading: false });
      })
      .catch((error) => {
        console.error(error);
        setResult({ ingredients: null, loading: false });
      });
  }, []);

  const fetchIngredient = (name: string = '') => {
    return axios.get(`/search.php?i=${name}`).then((response) => {
      return response.data.ingredients[0];
    });
  };

  return result;
};
