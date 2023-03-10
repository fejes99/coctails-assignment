import React from 'react';
import './Select.css';

type SelectProps = {
  title: 'category' | 'glass';
};

const Select: React.FC<SelectProps> = ({ title }) => {
  let options;
  return (
    <select value='Select'>
      <option value='' disabled selected>
        Select by {title}
      </option>
      {options}
    </select>
  );
};

export default Select;
