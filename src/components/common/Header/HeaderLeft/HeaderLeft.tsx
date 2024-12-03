import Arrow from '@assets/icons/header/arrow.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';

const pathUtils = (pathname: string) => {
  if (pathname.match(/^\/store\/\d+$/) || pathname.match(/^\/menu\/\d+$/))
    return false;
  return true;
};

export default function HeaderLeft() {
  const { pathname } = useLocation();
  const buttonClass = pathUtils(pathname) ? 'text-black' : 'text-white';
  const navigate = useNavigate();
  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <button className={`${buttonClass}`} type='button' onClick={handlePrevPage}>
      <Arrow />
    </button>
  );
}
