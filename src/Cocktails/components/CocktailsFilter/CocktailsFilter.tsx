import React, { useCallback } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import './CocktailsFilter.css';
import useFetchCategories, { Category } from '../../hooks/useFetchCategories';
import useFetchGlasses, { Glass } from '../../hooks/useFetchGlasses';
import Loader from '../../../components/Loader/Loader';
import Search from '../../../components/Search/Search';
import LetterFilter from '../../../components/LetterFilter/LetterFilter';

type SelectOption = {
  label: string;
  value: string;
};

const CocktailsFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const { categories, loading: loadingCategories } = useFetchCategories();
  const { glasses, loading: loadingGlasses } = useFetchGlasses();

  const currentCategory: string = searchParams.get('category') ?? '';
  const currentGlass: string = searchParams.get('glass') ?? '';

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

  const categoryOptions: SelectOption[] = getCategoryOptions(categories);
  const glassOptions: SelectOption[] = getGlassOptions(glasses);

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    searchParams.delete('id');

    const newPathname: string = location.pathname.replace(/\/\d+$/, '');

    navigate(`${newPathname}?${name}=${value}`, { replace: true });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    searchParams.delete('id');

    const newPathname: string = location.pathname.replace(/\/\d+$/, '');
    let newUrl = `${newPathname}`;
    if (value) newUrl = `${newPathname}?${name}=${value}`;

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
