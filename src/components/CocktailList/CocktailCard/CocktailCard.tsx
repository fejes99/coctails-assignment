import React from 'react';
import './CocktailCard.css';

interface CocktailCardProps {
  image: string;
  name: string;
  category: string | undefined;
  glass: string | undefined;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ image, name, category, glass }) => {
  const containerClassName = `cocktail-card${!category && !glass ? ' cocktail-card-small' : ''}`;

  return (
    <div className={containerClassName}>
      <img className='cocktail-img' alt='cocktail' src={image} />
      <div className='cocktail-name'>{name}</div>
      <div className='cocktail-data'>
        {category && <div className='cocktail-category'>{category}</div>}
        {glass && <div className='cocktail-glass'>{glass}</div>}
      </div>
    </div>
  );
};

export default CocktailCard;
