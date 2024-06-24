import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { Navigate } from 'react-router';
import { TProtectedRouteProps } from './type';
import { Login } from '@pages';

export const ProtectedRoute = ({
  children,
  onlyUnAuth = false
}: TProtectedRouteProps) => {
  const isAuthChecked = useSelector((state) => state.userData.isAuthChecked);
  const user = useSelector((state) => state.userData.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Login />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (onlyUnAuth && user) {
    return <Navigate to='/' />;
  }

  return children ? children : <Outlet />;
};
