import axios from "axios";
import { retriveData } from "./storage";

axios.defaults.baseURL = `http://localhost:8000/`;
const registerURL = 'register';
const loginURL = 'login';
const textBooksUrl = `text-books/${retriveData('userId')}`;
const audioBooksUrl = `audio-books/${retriveData('userId')}`
const feedbackUrl = 'feedback'
const addBookUrl = 'add-book'
const deleteBookUrl = `delete-books`

export const registerApi = async (inputs) => {
    try {

        let data = {
            username: inputs.userName,
            email: inputs.email,
            password: inputs.password
        }
        const response = await axios.post(registerURL, data);
        if (response) {
            return response.data;
        }
        else {
            console.error(response);
        }
    } catch (error) {
        console.error(error)
    }
}
export const postFeedback = async (inputs) => {
    try {

        let data = {
            feedback: inputs.feedback,
            user_id: inputs.user_id,
        }
        const response = await axios.post(feedbackUrl, data);
        if (response) {
            return response.data;
        }
        else {
            console.error(response);
        }
    } catch (error) {
        console.error(error)
    }
}
export const postNewBook = async (inputs) => {
    try {

        let data = {
            title: inputs.title,
            author: inputs.author,
            user_id: retriveData('userId'),
            book_link: inputs.url,
            book_description: inputs.description,
            book_format: inputs.type == 'audio' ? 1 : 0
        }
        console.log('post new book',data)

        const response = await axios.post(addBookUrl, data);
        if (response) {
            return response.data;
        }
        else {
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
        console.log('from api.js', response);
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

export const getTextBooks = async () => {

    const response = await axios.get(textBooksUrl);
    if (response) {
        return response.data
    }

}
export const getAudioBooks = async () => {
    const response = await axios.get(audioBooksUrl);
    if (response) {
        return response.data
    }

}

export const deleteBook = async (book_id) => {
    const response = await axios.delete(deleteBookUrl+`/${book_id}`);
    console.log('delete response',response)
    if (response) {
        return response.data
    }

}