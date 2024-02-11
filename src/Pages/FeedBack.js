import React from 'react'
import { useForm } from "react-hook-form"
import { feedbackValidationSchema } from '../Validation Schema/feedback';
import { yupResolver } from '@hookform/resolvers/yup';
import { postFeedback } from '../Services/Api';
import { retriveData } from '../Services/storage';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FeedBack() {

    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(feedbackValidationSchema),
    });
    const { errors } = formState;

    const onSubmitHandler = async (data) => {
        console.log({ data });
        data.user_id=retriveData('userId');
        let response = await postFeedback(data);
        console.log(response)
        if(response.success){
            toast.success(response.message);
        }
        else{
            toast.error('something went wrong pleas try again later');
        }
        reset();
    };

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-8'>
                    <h3>Spread love everywhere you go.</h3>
                    <p>This page motive is to educate all the people in the world and the company is secondary and it is created to solve all the problems of the consumer across the world by reading the book and get benifited.</p>
                    <div className='card p-3 bg-light mt-5'>
                        <h5 className='text-center'>Your feedback our improvement</h5>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Feedback</label>
                                <textarea rows="5" {...register('feedback')} className={`form-control ${errors.feedback ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="comments" />
                                <div className='invalid-feedback'>{errors.feedback?.message}</div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                <span className="spinner-grow spinner-grow-sm" type ="submit" aria-hidden="true"></span>&nbsp;
                                <span role="status">Thank you</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>

    )
}

export default FeedBack

