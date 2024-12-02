import { useLocation } from 'react-router-dom';
import HeaderCenter from './HeaderCenter/HeaderCenter';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';

const isHeaderVisible = (pathname: string) => pathname !== '/login';

export default function Header() {
  const { pathname } = useLocation();
  const isShopPage =
    pathname.match(/^\/store\/\d+$/) ||
    pathname.match(/^\/menu\/\d+$/) ||
    pathname === '/';
  // const isReceiptPage = pathname.includes('receipt')
  const isReceiptPage = true

  const headerClass = (isShopPage || isReceiptPage) ? '' : 'bg-white';

  return (
    isHeaderVisible(pathname) && (
      <header
        className={`absolute w-full left-0 flex items-center justify-between h-[50px] px-4 py-[9px] z-10 ${headerClass}`}
      >
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </header>
    )
  );
}
