import React from 'react';
import { useNavigate } from 'react-router';

import './CocktailCard.css';
import Cocktail from '../../../Cocktails.d';

type Props = {
  cocktail: Cocktail;
};

const CocktailCard: React.FC<Props> = ({
  cocktail: {
    idDrink: id,
    strDrinkThumb: image,
    strDrink: name,
    strCategory: category,
    strGlass: glass,
  },
}) => {
  const navigate = useNavigate();

  const navigateToCocktail = () => navigate(`/cocktails/${id}`);

  const navigateToCategory = () => navigate(`/cocktails/alcoholic?category=${category}`);

  const navigateToGlass = () => navigate(`/cocktails/alcoholic?glass=${glass}`);

  const containerClassName = `cocktail-card${!category && !glass ? ' cocktail-card-small' : ''}`;

  return (
    <div className={containerClassName}>
      <img className='cocktail-card-img' alt='cocktail' src={image} onClick={navigateToCocktail} />
      <div className='cocktail-card-name' onClick={navigateToCocktail}>
        {name}
      </div>
      <div className='cocktail-card-data'>
        {category && (
          <div className='cocktail-card-category' onClick={navigateToCategory}>
            {category}
          </div>
        )}
        {glass && (
          <div className='cocktail-card-glass' onClick={navigateToGlass}>
            {glass}
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailCard;
