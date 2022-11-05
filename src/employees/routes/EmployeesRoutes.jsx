import { Navigate, Route, Routes } from 'react-router-dom';
import { EmployeesPage, UploadPage } from '../pages';

export const EmployeesRoutes = () => {
    return (
        <Routes>
            <Route path="/employees" element={ <EmployeesPage /> } />
            <Route path="/upload" element={ <UploadPage /> } />

            <Route path="/*" element={ <Navigate to="/employees" /> } />
        </Routes>
    )
}
