import axois from 'axois'

axois.defaults.baseURL =`http://localhost:8000/`;
const registerURL='register';

export const registerApi = (inputs)=>{
    let data = {
        username:inputs.name,
        email:inputs.email,
        password:inputs.password
    }
    return axois.post(registerURL,data);
}