import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LetterFilter from '../../../components/LetterFilter/LetterFilter';
import Loader from '../../../components/Loader/Loader';
import useFetchCategories, { Category } from '../../hooks/useFetchCategories';
import useFetchGlasses, { Glass } from '../../hooks/useFetchGlasses';

import './CocktailsFilter.css';

type SelectOption = {
  label: string;
  value: string;
};

const CocktailsFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentCategory = new URLSearchParams(location.search).get('category') ?? '';
  const currentGlass = new URLSearchParams(location.search).get('glass') ?? '';

  const { categories, loading: loadingCategories } = useFetchCategories();
  const { glasses, loading: loadingGlasses } = useFetchGlasses();

  const getCategoryOptions = useCallback((categories: Category[] | null): SelectOption[] => {
    if (!categories) return [];

    return categories.map((category) => ({
      label: category.strCategory,
      value: category.strCategory.replace(/ /g, '_').toLowerCase(),
    }));
  }, []);

  const getGlassOptions = useCallback((glasses: Glass[] | null): SelectOption[] => {
    if (!glasses) return [];

    return glasses.map((glass) => ({
      label: glass.strGlass,
      value: glass.strGlass.replace(/ /g, '_').toLowerCase(),
    }));
  }, []);

  const categoryOptions = getCategoryOptions(categories);
  const glassOptions = getGlassOptions(glasses);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    navigate(`?${name}=${value}`, { replace: true });
  };

  if (loadingCategories || loadingGlasses) {
    return <Loader />;
  }

  return (
    <div className='filters'>
      <div className='category-filter'>
        <select name='category' value={currentCategory} onChange={handleOptionChange}>
          <option value=''>All Categories</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='glass-filter'>
        <select name='glass' value={currentGlass} onChange={handleOptionChange}>
          <option value=''>All Glasses</option>
          {glassOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='letter-filter'>
        <LetterFilter />
      </div>
    </div>
  );
};

export default CocktailsFilter;
