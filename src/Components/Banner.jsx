import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='container my-5'>
                <div className="card bg-light p-4 text-center" style={{ width: "100%"}}>
                    <div className="card-body">
                        <h4 className="card-title h1">A warm welcome!</h4>
                        <p className="card-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a href="#" className="btn btn-primary">Call to action</a>
                    </div>
                </div>
            </div>
        )
    }
}


