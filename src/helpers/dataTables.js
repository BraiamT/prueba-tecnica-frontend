
export const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: false
};

export const employeesTableColumns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Last Name',
        selector: row => row.last_name,
    },
    {
        name: 'Birthday',
        selector: row => row.birthday,
    },
];
