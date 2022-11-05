import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { EmployeesRoutes } from '../employees/routes/EmployeesRoutes';
import { Loading } from '../common/components/Loading';
import { HomePage } from '../common/pages';

export const AppRouter = () => {

    const { status } = useSelector( state => state.auth);

    if ( status === 'checking-auth' ) {
        return <Loading />
    }

    return (
        <Routes>

            {
                status === 'authenticated'
                ? <Route path="/*" element={ <EmployeesRoutes /> } />
                : <Route path="/auth/*" element={ <AuthRoutes /> } />
            }

            <Route path="/home" element={ <HomePage /> } />
            <Route path="/*" element={ <Navigate to='home' /> } />

        </Routes>
    )
}
