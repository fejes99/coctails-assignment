import React, { useCallback } from 'react';
import { useNavigate, useLocation, useSearchParams, createSearchParams } from 'react-router-dom';
import Search from './Search/Search';
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
  const [searchParams] = useSearchParams();

  const currentCategory = searchParams.get('category') ?? '';
  const currentGlass = searchParams.get('glass') ?? '';

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

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;

    searchParams.delete('id');

    const newSearchParams = createSearchParams(searchParams.toString());
    newSearchParams.set(name, value);

    const newPathname = location.pathname.replace(/\/\d+$/, '');
    const newUrl = `${newPathname}?${newSearchParams.toString()}`;

    navigate(newUrl, { replace: true });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    searchParams.delete('id');

    const newSearchParams = createSearchParams(searchParams.toString());
    newSearchParams.set(name, value);

    const newPathname = location.pathname.replace(/\/\d+$/, '');
    const newUrl = `${newPathname}?${newSearchParams.toString()}`;

    navigate(newUrl, { replace: true });
  };

  if (loadingCategories || loadingGlasses) {
    return <Loader />;
  }

  return (
    <div className='filters'>
      <div className='filters-title'>
        <h1>Cocktails</h1>
        <h2>Over 160 cocktails to choose</h2>
      </div>
      <div className='category-filter'>
        <select name='category' value={currentCategory} onChange={handleOption}>
          <option value=''>All Categories</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='glass-filter'>
        <select name='glass' value={currentGlass} onChange={handleOption}>
          <option value=''>All Glasses</option>
          {glassOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='search-filter'>
        <Search onChange={handleSearch} />
      </div>

      <div className='letter-filter'>
        <LetterFilter />
      </div>
    </div>
  );
};

export default CocktailsFilter;
