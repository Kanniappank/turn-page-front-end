import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { addBookValidationSchema } from '../Validation Schema/addBook';
import { useForm } from "react-hook-form"
import { postNewBook } from '../Services/Api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

function AddBooks() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(addBookValidationSchema),
    });

    const { errors } = formState;

    const onSubmitHandler = async (data) => {
        console.log({ data });
        let response = await postNewBook(data);
        if (response.success) {
            toast.success(response.message);
            if (data.type == 'audio') {
                navigate('/audio-books')
            }
            else {
                navigate('/text-books')

            }
        }
        else {
            toast.error('something went wrong pleas try again later');
        }
        reset();
    };
    const onClose = () => {
        navigate('/text-books');
    }
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6'>
                    <div className='card p-3 bg-light mt-5'>
                        <h5>Add Book</h5>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputEmail1">Book Title</label>
                                <input {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Book Title " />
                                <div className='invalid-feedback'>{errors.title?.message}</div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Book Author</label>
                                <input {...register('author')} className={`form-control ${errors.author ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Book author" />
                                <div className='invalid-feedback'>{errors.author?.message}</div>

                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Book Url</label>
                                <input {...register('url')} className={`form-control ${errors.url ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Book URL" />
                                <div className='invalid-feedback'>{errors.url?.message}</div>

                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputPassword1">Book Descriptoin</label>
                                <textarea rows="5" {...register('description')} className={`form-control ${errors.description ? 'is-invalid' : ''}`} id="exampleInputPassword1" placeholder="Book description" />
                                <div className='invalid-feedback'>{errors.description?.message}</div>

                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="html">Book Format</label><br></br>

                                <input type="radio" id="text" name="book-format" value="text" {...register('type')} className={`form-check-input ${errors.type ? 'is-invalid' : ''}`} />
                                <label htmlFor="html" className='form-check-label'>Text</label><br></br>
                                <input type="radio" id="audio" name="book-format" value="audio" {...register('type')} className={`form-check-input ${errors.type ? 'is-invalid' : ''}`} />
                                <label htmlFor="css" className='form-check-label'>Audio</label><br></br>
                                <div className='invalid-feedback'>{errors.type?.message}</div>


                            </div>
                            <button className="btn btn-primary" type="submit">
                                {/* <span className="spinner-grow spinner-grow-sm" type ="submit" aria-hidden="true"></span>&nbsp; */}
                                <span role="status">Add Book</span>
                            </button>
                            <button className="ms-2 btn btn-warning" onClick={() => onClose()}>close</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddBooks
