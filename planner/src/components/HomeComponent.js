import React from 'react';

export default function Home() {
    return (
            <div>
            <div className="jumbotron">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 my-auto">
                        <h1 className="display-3">Planner Wall</h1>
                        <p className="lead">Your ultimate tool for productive routine.</p>
                        <button type="button" className="btn btn-success signup">Signup</button>
                    </div>

                    <div className="col-12 col-sm-6 offset-xl-1 col-xl-4 align-self-center">
                        <img src="assets/images/jumbologo.svg" className="img-fluid" alt="Notes"/>
                    </div>
                </div>  
                </div>
            </div>

            <div className="container">
            <div className="row align-items-center row-content">
                <div className="col-12 col-sm-6 col-lg-4">
                    <img src="assets/images/Todo2.svg" className="img-fluid " alt=""/>
                </div>
                <div className="col-12 col-sm-6 col-lg-8 feature-desc text-center">
                    <h3>Maintain your TO-DO's</h3>
                </div>
            </div>
            
            <div className="row align-items-center row-content ">
                <div className="col-12 col-sm-6 col-lg-4 order-sm-last">
                    <img src="assets/images/notes.svg" className="img-fluid " alt=""/>
                </div>
                <div className="col-12 col-sm-6 col-lg-8 order-sm-first feature-desc text-center">
                    <h3>Keep Notes</h3>
                </div>
            </div>
            
            <div className="row align-items-center row-content">
                <div className="col-12 col-sm-6 col-lg-4">
                    <img src="assets/images/plans.svg" className="img-fluid " alt=""/>
                </div>
                <div className="col-12 col-sm-6 col-lg-8 feature-desc text-center">
                    <h3>Transform your ideas into plans.</h3>
                </div>
            </div>

            <div className="row align-items-center row-content">
                <div className="col-12 text-center">
                    <div className="card card-body bg-light">
                        <blockquote className="blockquote">
                            <p className="mb-0">All you need is the plan, the road map, and the courage to press on to your destination. </p>
                            <footer className="blockquote-footer">Earl Nightingale
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
            </div>
    )
}
