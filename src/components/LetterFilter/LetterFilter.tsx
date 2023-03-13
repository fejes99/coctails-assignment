import React from 'react';
import { useNavigate, useLocation, useSearchParams, createSearchParams } from 'react-router-dom';
import './LetterFilter.css';

const LetterFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const setFirstLetter = (letter: string) => {
    searchParams.delete('id');

    const newSearchParams = createSearchParams(searchParams.toString());
    newSearchParams.set('firstLetter', letter);

    const newPathname = location.pathname.replace(/\/\d+$/, '');
    const newUrl = `${newPathname}?${newSearchParams.toString()}`;

    navigate(newUrl, { replace: true });
  };

  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className='letter-container'>
      {letters.map((letter: string) => (
        <div key={letter} onClick={() => setFirstLetter(letter)} className='letter-box'>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default LetterFilter;
