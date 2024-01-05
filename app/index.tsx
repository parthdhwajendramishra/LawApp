import { Redirect } from 'expo-router';

const MainLayout = () => {
  return <Redirect href={'/auth/signin/'} />;
};

export default MainLayout;
