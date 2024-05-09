import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});


export function loginClient(body) {
    return api.post('/client/login', body)
}
export function forgotPassword(){
    return api.get('/client/forgot-password')
}
const fetchDataMenus= async () =>{
    const getApi = await api.get('/restaurant/menu')
    return getApi
}

export default fetchDataMenus