import axios from 'axios';
import { getEnvironments } from '../helpers/getEnvironments';

const { VITE_EXAMEN_API_BASE_URL } = getEnvironments();

export const examenApi = axios.create({
    baseURL: VITE_EXAMEN_API_BASE_URL
});

// https://6edeayi7ch.execute-api.us-east1.amazonaws.com/v1/examen/employees/:tu_nombre
