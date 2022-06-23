import React, { Component } from 'react'
import "./style.css"

export default class Items extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-react align-items-center bg-light mb-5">
              <div className='bg-primary icon-items'>
                  <span><i className="far fa-file"></i></span>
              </div>
              <div className="card-body">
                <h4 className="card-title font-weight-bold">Fresh new layout</h4>
                <p className="card-text mb-4">With Bootstrap 5, we've created a fresh new layout for this template!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card d-flex align-items-center bg-light mb-5">
              <div className='bg-primary icon-items'>
                  <span><i className="fas fa-cloud-moon-rain"></i></span>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">Fresh new layout</h4>
                <p className="card-text mb-4">As always, Start Bootstrap has a powerful collectin of free templates.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card d-flex align-items-center bg-light mb-5">
              <div className='bg-primary icon-items'>
                  <span><i className="far fa-credit-card"></i></span>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">Jumbotron hero header</h4>
                <p className="card-text mb-4">The heroic part of this template is the jumbotron hero header!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card d-flex align-items-center bg-light mb-5">
              <div className='bg-primary icon-items'>
                  <span><i className="fas fa-code"></i></span>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">Feature boxes</h4>
                <p className="card-text mb-4">We've created some custom feature boxes using Bootstrap icons!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card d-flex align-items-center bg-light mb-5">
              <div className='bg-primary icon-items'>
                  <span><i className="fas fa-code"></i></span>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">Simple clean code</h4>
                <p className="card-text mb-4">We keep our dependencies up to date and squash bugs as they come!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card d-flex align-items-center bg-light mb-5">
              <div className='bg-primary icon-items'>
                  <span><i className="fas fa-check-double"></i></span>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">A name you trust</h4>
                <p className="card-text mb-4">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
