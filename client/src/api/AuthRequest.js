import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:5000"});

export const logInCompany = (formData) => api.post('/auth/logincompany', formData);
export const signUpCompany = (formData) => api.post('/auth/registercompany', formData);

export const logInSaller = (formData) => api.post('/auth/loginsaller', formData);
export const signUpSaller = (formData) => api.post('/auth/registersaller', formData);

