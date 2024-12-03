import { Link, useLocation } from 'react-router-dom';
import MenuBar from '@assets/icons/nav/menuBar.svg?react';
// import useAuthVerify from '@hooks/queries/verify';
// import { useGetCartCountQuery } from '@hooks/queries/cart';

const pathUtils = (pathname: string) => {
  if (
    pathname === '/' ||
    pathname.match(/^\/store\/\d+$/) ||
    pathname.match(/^\/menu\/\d+$/)
  )
    return false;
  return true;
};

export default function HeaderRight() {
  const { pathname } = useLocation();
  const linkClass = pathUtils(pathname) ? 'text-[#FFE499]' : 'text-white';
  // const { data: authData } = useAuthVerify();
  // const { data, isLoading } = useGetCartCountQuery();
  // if (isLoading) return null;
  // const cartCount = authData === 200 ? data.cart_count : count;
  return (
    <Link
      to={'#'}
      className={`relative flex items-end justify-center ${linkClass}`}
    >
      <MenuBar />
    </Link>
  );
}
