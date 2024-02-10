import * as yup from "yup";

export const feedbackValidationSchema = yup.object().shape({
  feedback: yup.string().required('feedback is required').min(10).max(50),

});