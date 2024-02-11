import React, { useState, useEffect } from 'react';
import bookImg from '../Assets/bookImg.jpg'
import { FaPlay } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import {getAudioBooks} from '../Services/Api'
import { retriveData } from '../Services/storage';


function AudioBooks() {
  const[books,setBooks]=useState([]);
  useEffect(() => {
    getData();
  },[]);
  const getData=async()=>{
    let response = await getAudioBooks();
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
        <div className='col-md-12 d-flex'>
            {books?.length ? books.map((item)=>(
            <div className='card p-3 bg-light mt-5 w-25 ms-3'>
              <img src={bookImg} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.book_description}</p>
                <div className='d-flex justify-content-between'>
                  <a href={item.book_link} target="_blank"><FaPlay size={20} /><label>View</label></a>
                  <a href=''><AiTwotoneDelete size={20} /><label>Delete</label></a>
                </div>
              </div>
            </div>

            )):<h5>you don't have any books to see please add books</h5>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioBooks
