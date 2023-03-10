import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LetterFilter.css';

const LetterFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const setFirstLetter = (letter: string) => {
    const queryParams = new URLSearchParams(location.search);
    const currentFirstLetter = queryParams.get('firstLetter');

    if (currentFirstLetter) {
      queryParams.set('firstLetter', letter.toLowerCase());
    } else {
      queryParams.append('firstLetter', letter.toLowerCase());
    }

    const pathname = location.pathname;
    let newPathname = `${pathname}?${queryParams.toString()}`;

    if (pathname === '/cocktails') {
      newPathname = `alcoholic${newPathname}`;
    }

    navigate(newPathname, { replace: true });
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
