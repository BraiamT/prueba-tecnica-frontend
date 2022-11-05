import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { startLoadingEmployees } from '../../store/employees';
import { EmployeesLayout } from '../layout/EmployeesLayout';
import { employeesTableColumns, paginationComponentOptions } from '../../helpers';
import { FilterComponent } from '../components/FilterComponent';
import { EmployeeModal } from '../components/EmployeeModal';

export const EmployeesPage = () => {

    const { employees } = useSelector( state => state.employees );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingEmployees() );
    }, []);
    
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

    return (
        <EmployeesLayout>
            
            <div className="container-md">
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
