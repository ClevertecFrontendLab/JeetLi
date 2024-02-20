import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages';
import { Auth } from '@pages/auth';
import { ProtectedRoute } from '@utils/protected-route';
import LoginError from '@components/result/login-error';
import RegError from '@components/result/reg-error';
import RegSucsess from '@components/result/reg-sucsess';

const GlobalRoute = () => {
    console.log(localStorage);
    return (
        <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route
                path='/main'
                element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                }
            />
            <Route path='/result/success' element={<RegSucsess />} />
            <Route path='/result/error-user-exist' element={<RegError type={true} />} />
            <Route path='/result/error' element={<RegError type={false} />} />
            <Route path='/result/error-login' element={<LoginError />} />
            <Route path='/' element={<Navigate to='/main' replace />} />
        </Routes>
    );
};
export default GlobalRoute;
