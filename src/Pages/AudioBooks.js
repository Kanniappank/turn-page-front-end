import React from 'react'
import bookImg from '../Assets/bookImg.jpg'
import { FaPlay } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function AudioBooks() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='col-md-3'>
            <div className='card p-3 bg-light mt-5'>
              <img src={bookImg} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-flex justify-content-between'>
                  <a href=''><FaPlay size={20} /><label>Play</label></a>
                  <a href=''><AiTwotoneDelete size={20} /><label>Delete</label></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioBooks
