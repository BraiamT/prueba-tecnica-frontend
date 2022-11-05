import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { employeesSlice } from './employees';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    employees: employeesSlice.reducer
  },
});
