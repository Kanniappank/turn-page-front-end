import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidationSchema } from '../Validation Schema/register';
import { useNavigate } from 'react-router-dom';
import { registerApi } from '../Services/Api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(registerValidationSchema),
    });
    const { errors } = formState;

    const onSubmitHandler = async (data) => {
        console.log({ data });
        let response = await registerApi(data)
        console.log('register api', response);
        if (response.success) {
            toast.success(response.message);
            navigate('/login');
        }
        else {
            toast.error('something went wrong plese try again latter');

        }
        reset();
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-md-5'>
                        <div className='card p-3 bg-light mt-5'>
                            <h5 className='text-center'>Register User</h5>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">User Name</label>
                                    <input type="text" {...register("userName")} className={`form-control ${errors.userName ? 'is-invalid' : ''}`} placeholder="Enter user name" />
                                    <div className='invalid-feedback'>{errors.userName?.message}</div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input {...register("email")} className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <div className='invalid-feedback'>{errors.email?.message}</div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" {...register("password")} className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Password" />
                                    <div className='invalid-feedback'>{errors.password?.message}</div>
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                                <div>
                                    <label>Already have an account <Link to='/login'>Login</Link> here</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Register
