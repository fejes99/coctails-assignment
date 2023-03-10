import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LetterFilter.css';

const LetterFilter: React.FC = () => {
  const navigate = useNavigate();

  const setFirstLetter = (letter: string) => navigate(`?firstLetter=${letter}`, { replace: true });

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
