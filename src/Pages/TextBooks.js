import React from 'react'
import bookImg from '../Assets/bookImg.jpg'

function TextBooks() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='col-md-3'>
            <div className='card p-3 bg-light mt-5'>
              <img src={bookImg} class="card-img-top"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextBooks
