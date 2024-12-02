import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavListProp {
  name: string;
  link: string;
  icon: ReactElement;
}

export default function NavList({ item }: { item: NavListProp }) {
  const { pathname } = useLocation();
  const { name, link, icon } = item;
  const LinkClass = pathname === link ? 'text-primary' : 'text-[#D3D3D3]';
  const nameClass = pathname === link ? 'text-primary' : 'text-disabled';

  return (
    <li>
      <Link
        className={`flex flex-col items-center gap-1 ${LinkClass}`}
        to={link}
      >
        {icon}
        <p className={`leading-[19px] ${nameClass}`}>{name}</p>
      </Link>
    </li>
  );
}
