import { useSelector } from 'react-redux';
import { EmployeesLayout } from '../layout/EmployeesLayout';

export const EmployeesPage = () => {

    const { selectedView } = useSelector( state => state.employees );

    return (
        <EmployeesLayout>
            
            <h1>Employees</h1>
            
        </EmployeesLayout>
    )
}
