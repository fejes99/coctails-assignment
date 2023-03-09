import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationItem } from '../Navbar';
import './NavbarItem.css';

interface NavbarItemProps {
  item: NavigationItem;
}

const NavbarItem = ({ item: { title, url, submenu } }: NavbarItemProps) => {
  return (
    <div className='navbar-item'>
      <NavLink to={url}>{title}</NavLink>
      {submenu && (
        <div className='submenu'>
          {submenu.map((subitem) => (
            <NavbarItem
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
