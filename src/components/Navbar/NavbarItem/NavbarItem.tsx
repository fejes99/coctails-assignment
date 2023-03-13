import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationItem } from '../Navbar';
import './NavbarItem.css';

interface NavbarItemProps {
  item: NavigationItem;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ item: { title, url, submenu } }) => {
  return (
    <div className='navbar-item'>
      <NavLink to={url}>{title}</NavLink>
      {submenu && (
        <div className='submenu'>
          {submenu.map((subitem) => (
            <NavbarItem
              key={subitem.title}
              item={{
                ...subitem,
                url: `${url}${subitem.url}`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
