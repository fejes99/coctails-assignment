import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Ingredient } from './../Ingredients.d';

interface FetchIngredientsResult {
  ingredients: Ingredient[] | null;
  loading: boolean;
}

interface FetchIngredientResult {
  ingredient: Ingredient | null;
  loading: boolean;
}

export const useFetchIngredients = (): FetchIngredientsResult => {
  const [result, setResult] = useState<FetchIngredientsResult>({
    ingredients: null,
    loading: true,
  });

  useEffect(() => {
    const fetchIngredient = async (name: string = '') => {
      const response = await axios.get(`/search.php?i=${name}`);
      return response.data.ingredients[0];
    };

    axios
      .get('/list.php?i=list')
      .then((response) => response.data.drinks)
      .then((ingredients) => {
        const promises = ingredients.map(async (ingredient: Ingredient) => {
          const ingredientData = await fetchIngredient(ingredient?.strIngredient1);
          return {
            ...ingredient,
            ...ingredientData,
          };
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

  return result;
};

export const useFetchIngredientById = (): FetchIngredientResult => {
  const [result, setResult] = useState<FetchIngredientResult>({
    ingredient: null,
    loading: true,
  });

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/lookup.php?iid=${id}`)
      .then((response) => setResult({ ingredient: response.data.ingredients[0], loading: false }));
  }, [id]);

  return result;
};
