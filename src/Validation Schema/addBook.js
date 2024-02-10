import * as yup from "yup";

export const addBookValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  url: yup.string().required('URL is required'),
  description: yup.string().email().required('Description is required').min(10).max(50),
  type: yup.string().required('Book type is required').min(10).max(50),

});