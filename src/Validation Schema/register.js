import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
    userName: yup.string().required('User name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(8).max(32).required('Password is required'),
});