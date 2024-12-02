import Layout from '@components/common/Layout/Layout';
import MainPage from '../pages/main';

const userRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <MainPage />,
    },]
};

export default userRoutes;
