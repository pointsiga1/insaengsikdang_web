import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

export default function Layout() {
  const { pathname } = useLocation();
  const isReceiptPage = pathname.includes('receipt');

  // const headerClass = (isReceiptPage) ? 'bg-[#F3F3F3]' : 'bg-white';
  const headerClass = 'bg-[#F3F3F3]';
  return (
    <div className={`max-w-[480px] m-auto min-h-screen relative ${headerClass}`}>
      <Header />
      <Outlet />
    </div>
  );
}
