import { Ingredient } from '../Ingredients.d';

type Props = {
  ingredients: Ingredient[] | null;
  query: string;
};

export const ingredientsFilter = ({ ingredients = [], query }: Props): Ingredient[] => {
  let filteredIngredients = ingredients?.filter((ingredient) =>
    ingredient.strIngredient1?.toLowerCase().includes(query.toLowerCase())
  );

  if (!filteredIngredients) return [];

  return filteredIngredients;
};
