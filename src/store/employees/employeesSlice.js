import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        isSaving: false,
        messageSaved: '',
        employees: []
    },
    reducers: {
        savingEmployee: ( state ) => {
            state.isSaving = true;
        },
        addNewEmployee: ( state, action ) => {
            state.employees.push( action.payload );
            state.messageSaved = `Employee ${ action.payload.name }, agregado con éxito`;
            state.isSaving = false;
        },
        setEmployees: ( state, action ) => {
            state.employees = action.payload;
            state.isSaving = false;
        },
        setLoading: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        clearEmployeesOnLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.employees = [];
        },
    }
});

export const {
    addNewEmployee,
    clearEmployeesOnLogout,
    savingEmployee,
    setEmployees,
    setLoading,
} = employeesSlice.actions;
