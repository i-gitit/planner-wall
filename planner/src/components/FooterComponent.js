import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="./todo.html">ToDo</a></li>
                            <li><a href="#">Notes</a></li>
                            <li><a href="#">Plans</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-7 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
               </div>
               <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020 Planner WORKSPACE</p>
                    </div>
               </div>
            </div>
        </footer>
        </div>
    )
}
