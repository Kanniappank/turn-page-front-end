import React, { useState, useEffect } from 'react';
import bookImg from '../Assets/bookImg.jpg'
import { FaRegEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getTextBooks} from '../Services/Api'

function TextBooks() {
  const[books,setBooks]=useState(null);
  useEffect(() => {
    getData();
  },[]);

  const getData=async()=>{
    let response = await getTextBooks();
    if(response.success){
      setBooks(response.books);
    }
    else{
      toast.error(response.message);
    }
  }
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='col-md-3'>
            {books?.length ? books.map((item)=>{
            <div className='card p-3 bg-light mt-5'>
              <img src={bookImg} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.book_description}</p>
                <div className='d-flex justify-content-between'>
                  <a href={item.book_link}><FaRegEye size={20} /><label>View</label></a>
                  <a href=''><AiTwotoneDelete size={20} /><label>Delete</label></a>
                </div>
              </div>
            </div>

            }):<h5>you don't have any books to see please add books</h5>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextBooks
