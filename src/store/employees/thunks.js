import { examenApi } from '../../api/examenApi';
import { addNewEmployee, setEmployees, setLoading } from './employeesSlice';

const myName = 'BraiamT';

export const startLoadingEmployees = () => {
    return async ( dispatch ) => {

        dispatch( setLoading() );

        const { data } = await examenApi.get(`/examen/employees/${ myName }`);
        const { data: results } = data;
        
        dispatch( setEmployees( results.employees ) );

    }
}

export const starSavingEmployee = ({ name, lastName, birthday }) => {
    return async ( dispatch ) => {

        dispatch( setLoading() );


        const { data } = await examenApi.post(`/examen/employees/${ myName }`, {
            name,
            last_name: lastName,
            birthday
        });
        
        if ( !data.success ) return;
        
        dispatch( addNewEmployee({ name, last_name: lastName, birthday }) );

    }
}
