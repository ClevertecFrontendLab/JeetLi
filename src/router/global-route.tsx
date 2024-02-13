
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages';

const GlobalRoute = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </HashRouter>
    );
};

export default GlobalRoute;
