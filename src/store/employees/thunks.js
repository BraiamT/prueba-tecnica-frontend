import { examenApi } from '../../api/examenApi';
import { setEmployees, setLoading } from './employeesSlice';

const myName = 'BraiamT';

export const startLoadingEmployees = () => {
    return async ( dispatch ) => {

        dispatch( setLoading() );

        const { data } = await examenApi.get(`/examen/employees/${ myName }`);
        const { data: results } = data;
        
        dispatch( setEmployees( results.employees ) );

    }
}
