import { useAuth } from "./HookSelector"
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshering } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshering;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}