import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Category } from '../../../hooks/useFetchCategories';
import { Glass } from '../../../hooks/useFetchGlasses';
import './Select.css';

type SelectProps = {
  title: 'category' | 'glass';
  options: Category[] | Glass[] | null;
};

const Select: React.FC<SelectProps> = ({ title, options }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentCategory = queryParams.get('category');
  const currentGlass = queryParams.get('glass');

  const handleCategory = (category: string) => {
    console.log('working');

    if (currentCategory) {
      queryParams.set('category', category.toLowerCase());
    } else {
      queryParams.append('category', category.toLowerCase());
    }

    const newPathname = `${location.pathname}?${queryParams.toString()}`;
    navigate(newPathname);
  };

  const handleGlass = (glass: string) => {
    console.log('working');

    if (currentGlass) {
      queryParams.set('glass', glass.toLowerCase());
    } else {
      queryParams.append('glass', glass.toLowerCase());
    }

    const newPathname = `${location.pathname}?${queryParams.toString()}`;
    navigate(newPathname);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    if (title === 'category') {
      handleCategory(selectedOption);
    } else if (title === 'glass') {
      handleGlass(selectedOption);
    }
  };

  let selectOptions = options?.map((option) =>
    'strCategory' in option ? (
      <option onClick={() => handleCategory(option.strCategory)} key={option.strCategory}>
        {option.strCategory}
      </option>
    ) : 'strGlass' in option ? (
      <option onClick={() => handleGlass(option.strGlass)} key={option.strGlass}>
        {option.strGlass}
      </option>
    ) : (
      <option disabled selected>
        Select by {title}
      </option>
    )
  );

  return <select onChange={(event) => handleOptionChange(event)}>{selectOptions}</select>;
};

export default Select;
