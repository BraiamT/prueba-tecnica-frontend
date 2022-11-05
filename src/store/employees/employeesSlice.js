import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        isSaving: false,
        messageSaved: '',
        selectedView: 'employees',
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
        },
        setSaving: ( state ) => {
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
    setSaving,
} = employeesSlice.actions;
