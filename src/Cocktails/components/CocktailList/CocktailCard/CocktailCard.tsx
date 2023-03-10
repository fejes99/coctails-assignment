import React from 'react';
import { useNavigate } from 'react-router';
import './CocktailCard.css';

interface CocktailCardProps {
  id: string;
  image: string;
  name: string;
  category: string | undefined;
  glass: string | undefined;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ id, image, name, category, glass }) => {
  const navigate = useNavigate();

  const containerClassName = `cocktail-card${!category && !glass ? ' cocktail-card-small' : ''}`;

  const navigateToCocktail = () => navigate(`${id}`);

  const navigateToCategory = () => {};

  const navigateToGlass = () => {};

  return (
    <div className={containerClassName}>
      <img className='cocktail-img' onClick={navigateToCocktail} alt='cocktail' src={image} />
      <div className='cocktail-name' onClick={navigateToCocktail}>
        {name}
      </div>
      <div className='cocktail-data'>
        {category && (
          <div className='cocktail-category' onClick={navigateToCategory}>
            {category}
          </div>
        )}
        {glass && (
          <div className='cocktail-glass' onClick={navigateToGlass}>
            {glass}
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailCard;
