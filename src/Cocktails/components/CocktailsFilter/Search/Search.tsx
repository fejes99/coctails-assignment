import './Search.css';

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <input name='name' className='search' type='text' placeholder='Search...' onChange={onChange} />
  );
};

export default Search;
