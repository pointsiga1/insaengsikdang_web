import { NAV_ITEMS } from '@src/constants/nav';
import NavList from './NavList/NavList';
import Nav from '../Nav';

export default function MainNav() {
  return (
    <Nav>
      <ul className='flex justify-between items-center'>
        {NAV_ITEMS.map(item => {
          return <NavList key={item.name} item={item} />;
        })}
      </ul>
    </Nav>
  );
}
