import React from 'react';
import { useNavigate, useLocation, useSearchParams, createSearchParams } from 'react-router-dom';

import './LetterFilter.css';

const LetterFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const setFirstLetter = (letter: string): void => {
    searchParams.delete('id');

    const newSearchParams: URLSearchParams = createSearchParams(searchParams.toString());
    newSearchParams.set('firstLetter', letter);

    const newPathname: string = location.pathname.replace(/\/\d+$/, '');

    navigate(`${newPathname}?firstLetter=${letter}`, { replace: true });
  };

  const letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

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
