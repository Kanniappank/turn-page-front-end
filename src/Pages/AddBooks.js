import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { addBookValidationSchema } from '../Validation Schema/addBook';
import { useForm } from "react-hook-form"

function AddBooks() {

    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(addBookValidationSchema),
    });
    const { errors } = formState;

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6'>
                    <div className='card p-3 bg-light mt-5'>
                        <h5>Add Book</h5>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputEmail1">Book Title</label>
                                <input {...register('title')} className={`form-control ${errors.title ? 'is-invalid':''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <div className='invalid-feedback'>{errors.title?.message}</div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Book Author</label>
                                <input {...register('author')} className={`form-control ${errors.author ? 'is-invalid':''}`} id="exampleInputPassword1" placeholder="Password" />
                                <div className='invalid-feedback'>{errors.author?.message}</div>

                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Book Url</label>
                                <input {...register('url')} className={`form-control ${errors.url ? 'is-invalid':''}`} id="exampleInputPassword1" placeholder="Password" />
                                <div className='invalid-feedback'>{errors.url?.message}</div>

                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Book Descriptoin</label>
                                <textarea rows="5" {...register('description')} className={`form-control ${errors.description ? 'is-invalid':''}`} id="exampleInputPassword1" placeholder="Password" />
                                <div className='invalid-feedback'>{errors.description?.message}</div>

                            </div>
                            <div className="form-group mb-4">
                                <label for="html">Book Format</label><br></br>

                                <input type="radio" id="text" name="book-format" value="text" {...register('type')} className={`form-check-input ${errors.type ? 'is-invalid':''}`} />
                                <label for="html" className='form-check-label'>Text</label><br></br>
                                <input type="radio" id="audio" name="book-format" value="audio" {...register('type')} className={`form-check-input ${errors.type ? 'is-invalid':''}`}/>
                                <label for="css" className='form-check-label'>Audio</label><br></br>
                                <div className='invalid-feedback'>{errors.type?.message}</div>


                            </div>
                            <button class="btn btn-primary" type="submit">
                                <span class="spinner-grow spinner-grow-sm" type ="submit" aria-hidden="true"></span>&nbsp;
                                <span role="status">Add Book</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBooks
