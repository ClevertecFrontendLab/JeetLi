import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const jwt = useAppSelector((state) => state.auth.jwt);
    const location = useLocation();
    if (!jwt) {
        return <Navigate to='/auth' state={{ from: location.pathname }} replace />;
    }

    return <>{children}</>;
};
