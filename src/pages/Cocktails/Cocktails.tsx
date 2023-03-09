import { Outlet } from 'react-router-dom';

const Cocktails = () => {
  return (
    <div>
      <div className=''>Cocktails</div>
      <Outlet />
    </div>
  );
};

export default Cocktails;
