import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        isSaving: false,
        messageSaved: '',
        isModalOpen: false,
        employees: []
    },
    reducers: {
        savingEmployee: ( state ) => {
            state.isSaving = true;
        },
        addNewEmployee: ( state, action ) => {
            const newEmployee = { ...action.payload, id: state.employees.at(-1).id + 1 }
            state.employees.push( newEmployee );
            state.messageSaved = `Employee ${ action.payload.name }, agregado con éxito`;
            state.isSaving = false;
        },
        setEmployees: ( state, action ) => {
            state.employees = action.payload;
            state.messageSaved = '';
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
        setOpenModal: ( state ) => {
            state.isModalOpen = true;
        },
        setCloseModal: ( state ) => {
            state.isModalOpen = false;
        },
    }
});

export const {
    addNewEmployee,
    clearEmployeesOnLogout,
    savingEmployee,
    setCloseModal,
    setEmployees,
    setLoading,
    setOpenModal,
} = employeesSlice.actions;
