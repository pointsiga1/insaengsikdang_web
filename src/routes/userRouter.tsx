import Layout from '@components/common/Layout/Layout';
import AccountRegisterPage from '@src/pages/accountRegister';

const userRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/accountRegister',
      element: <AccountRegisterPage />,
    },]
};

export default userRoutes;
