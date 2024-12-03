import useHeaderText from '@hooks/useHeaderText';
import { useLocation } from 'react-router-dom';

export default function HeaderCenter() {
  const { pathname } = useLocation();
  const { header } = useHeaderText();
  // const { search } = useLocation();
  const HeaderCenterClass = pathname.match(/^\/store\/\d+$/) && 'text-white';

  return (
    <h1
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold truncate w-60 text-center ${HeaderCenterClass}`}
    >
      {header}
    </h1>
  );
}
