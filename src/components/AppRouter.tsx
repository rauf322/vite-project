import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './router/routes';
import { AuthContext } from '../context';
import { useContext } from 'react';
import Loader from './UI/loader/Loader';
import { RouteType } from '../types/route';


const AppRouter = () => {
    const authContext = useContext(AuthContext);
    const isAuth = authContext?.isAuth ?? false;
    const isLoading = authContext?.isLoading ?? false;

    if(isLoading) {
        return <Loader/>
    }
    
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map((route: RouteType) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
        :
        <Routes>
            {publicRoutes.map((route: RouteType) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;