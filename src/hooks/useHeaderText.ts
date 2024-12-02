import { useLocation } from 'react-router-dom';
import { setHeaderText } from '@src/features/header/headerSlice';
import { useAppDispatch, useAppSelector } from './useReduxHooks';

const useHeaderText = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const headerState = useAppSelector(state => state.header);
  // const header =
  //   pathname === '/' || pathname.match(/^\/menu\/\d+$/)
  //     ? ''
  //     : headerState.header;

  const handleHeaderText = (text: string) => {
    dispatch(setHeaderText(text));
  };

  return {
    header: headerState.header,
    handleHeaderText,
  };
};

export default useHeaderText;
