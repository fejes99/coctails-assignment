import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Category {
  strCategory: string;
}

interface FetchCategoriesResult {
  categories: Category[] | null;
  loading: boolean;
}

const useFetchCategories = () => {
  const [result, setResult] = useState<FetchCategoriesResult>({
    categories: null,
    loading: true,
  });

  useEffect(() => {
    axios
      .get(`/list.php?c=list`)
      .then((response) => setResult({ categories: response.data.drinks, loading: false }));
  }, []);

  return result;
};

export default useFetchCategories;
