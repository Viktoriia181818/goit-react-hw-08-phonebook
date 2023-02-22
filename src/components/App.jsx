import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from './HookSelector';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';



const HomePage = lazy(() => import('../pages/Home')); 
const RegisterPage = lazy(() => import('../pages/Register')); 
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contact'));  

export const App = () => {
  const dispatch = useDispatch()

  const { isRefreshing } = useAuth()
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  )
}