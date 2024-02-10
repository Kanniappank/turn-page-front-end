import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { loginValidationSchema } from '../Validation Schema/login';
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {

    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(loginValidationSchema),
      });
    const {errors}= formState;

      const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
      };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-md-5'>
                        <div className='card p-3 bg-light mt-5'>
                            <h5 className='text-center'>User Login</h5>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input {...register("email")} className={`form-control ${errors.email ? 'is-invalid' : '' }  `} placeholder="Enter email" />
                                    <div className= 'invalid-feedback'>{String(errors.email?.message)}</div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input {...register("password")}  type="password" className={`form-control ${errors.password ? 'is-invalid' : ''} `} id="exampleInputPassword1" placeholder="Password" />
                                    <div className='invalid-feedback'>{String(errors.password?.message)}</div>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <div>
                                    <label>New User <Link to='/register'>Register</Link> here</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
