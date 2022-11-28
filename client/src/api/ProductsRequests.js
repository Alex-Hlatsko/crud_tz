import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
//   });

export const getProducts= ()=> API.get('/products');
export const postProducts= (formData)=> API.post('/products/post', formData);
export const folowProduct=(id, sellerId)=>API.put(`products/${id}/follow`, {sellerId: sellerId})