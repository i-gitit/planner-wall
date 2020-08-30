import React from 'react'

export default function NotesComponent() {
    return (
        <div>
           
        <div className="jumbotron">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 my-auto welcome">
                        <h1 className="display-3">Welcome!</h1>
                    </div>
                   
                    <div className="col-6 col-md-3 text-center">
                        <div className="card quick-card">
                            <a href="./todo.html" >
                                <img src="assets/images/todonavigation.svg" className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                              <h5 className="card-text">Your To-Do's</h5>
                            </div>
                          </div>
                    </div>

                    <div className="col-6 offset-md-1 col-md-3 text-center">
                        <div className="card quick-card">
                            <a role="button" id='newNoteButton' data-toggle="modal" data-target="#exampleModal">
                                <img src="assets/images/makeanote.svg" className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                              <h5 className="card-text">New Note</h5>
                            </div>
                          </div>
                    </div>
                
                </div>
                
            </div>
        </div>

        <div className="container">
        <div className="card-columns"> 
            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card">
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card bg-primary text-white text-center p-3">
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                <footer className="blockquote-footer text-white">
                  <small>
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            
            <div className="card p-3 text-right">
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>            
        </div>
        </div>
    )
}
