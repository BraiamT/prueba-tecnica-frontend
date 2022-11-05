import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { setOpenModal, startLoadingEmployees } from '../../store/employees';
import { EmployeesLayout } from '../layout/EmployeesLayout';
import { employeesTableColumns, getEnvironments, paginationComponentOptions } from '../../helpers';
import { FilterComponent } from '../components/FilterComponent';
import { EmployeeModal } from '../components/EmployeeModal';
import { Button } from '@mui/material';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const EmployeesPage = () => {

    const { VITE_APP_TITLE_PREFIX } = getEnvironments();

    useDocumentTitle(`${ VITE_APP_TITLE_PREFIX } | Employees`);

    const { employees, messageSaved } = useSelector( state => state.employees );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingEmployees() );
    }, []);

    useEffect(() => {
        if ( messageSaved.length > 0 ) {
            Swal.fire('¡Employee Agregado!', messageSaved, 'success');
        }
    }, [ messageSaved ]);
    
    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = employees.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if ( filterText ) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    const onOpenModal = () => {
        dispatch( setOpenModal() );
    }

    return (
        <EmployeesLayout>
            
            <div className="container-md">
                <div className="row justify-content-end">
                    <div className="col-md-3">
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={ onOpenModal }
                        >Add Employee</Button>
                    </div>
                </div>

                <DataTable
                    title="Employees List"
                    columns={ employeesTableColumns }
                    data={ filteredItems }
                    pagination
                    paginationComponentOptions={ paginationComponentOptions }
                    paginationResetDefaultPage={ resetPaginationToggle }
                    subHeader
                    subHeaderComponent={ subHeaderComponentMemo }
                    selectableRows
                    persistTableHead
                />
            </div>

            <EmployeeModal />
            
        </EmployeesLayout>
    )
}
