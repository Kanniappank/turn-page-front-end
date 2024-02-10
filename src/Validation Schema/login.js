import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email id required'),
  password: yup.string().min(8).max(32).required('Password is required'),
});