import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000/`;
const registerURL = 'register';
const loginURL = 'login';
const textBooksUrl = 'text-books'
const audioBooksUrl = 'audio-books'

export const registerApi = async (inputs) => {
    try {
        
        let data = {
            username: inputs.name,
            email: inputs.email,
            password: inputs.password
        }
        const response =  await axios.post(registerURL, data);
        if(response){
            return response.data;
        }
        else{
            console.error(response);
        }
    } catch (error) {
        console.error(error)
    }
}

export const loginApi = async (inputs) => {
    try {
        let data = {
            email: inputs.email,
            password: inputs.password
        }
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },

        //     body: JSON.stringify(data),
        // };
        const response = await axios.post(loginURL, data);
        // const response = await fetch('http://localhost:8000/login',requestOptions);
        console.log('from api.js',response);
        if (response) {
            return response.data;
        }
        else {
            console.error(response);
        }

    } catch (error) {
        console.error(error);

    }

}

export const getTextBooks = async()=>{
    const response = await axios.get(textBooksUrl);
    if(response){
        return response.data
    }

}