import './Navbar.css';
import NavbarItem from './NavbarItem/NavbarItem';

export interface NavigationItem {
  title: string;
  url: string;
  submenu?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    title: 'Cocktails',
    url: './cocktails',
    submenu: [
      {
        title: 'Alcoholic',
        url: '/alcoholic',
      },
      {
        title: 'Non Alcoholic',
        url: '/non-alcoholic',
      },
    ],
  },
  {
    title: 'Ingredients',
    url: '/ingredients',
  },
];

const Navbar = () => {
  let navbarItems = navigationItems.map((item: NavigationItem) => <NavbarItem item={item} />);
  return <div className='navbar'>{navbarItems}</div>;
};

export default Navbar;
