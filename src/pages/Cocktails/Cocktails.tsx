import { Navigate, Routes, Route } from 'react-router-dom';
import CocktailDetails from '../../components/CocktailDetails/CocktailDetails';
import CocktailList from '../../components/CocktailList/CocktailList';
import LetterFilter from '../../components/LetterFilter/LetterFilter';
import Select from '../../components/UI/Select/Select';
import './Cocktails.css';

const Cocktails: React.FC = () => {
  return (
    <div>
      <div className='cocktails'>
        <h1 className='cocktails-title'>Cocktails</h1>
        <h3 className='cocktails-subtitle'>Over 150 cocktails to choose</h3>
        <div className='filters'>
          <div className='category-filter'>
            <Select title={'category'} />
          </div>
          <div className='glass-filter'>
            <Select title={'glass'} />
          </div>
          <div className='letter-filter'>
            <LetterFilter />
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Navigate to='alcoholic' />} />
        <Route path='alcoholic' element={<CocktailList />} />
        <Route path='non_alcoholic' element={<CocktailList />} />
        <Route path=':id' element={<CocktailDetails />} />
      </Routes>
    </div>
  );
};

export default Cocktails;
