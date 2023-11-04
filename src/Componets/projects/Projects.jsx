import React from 'react'

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className='text-center text-decoration-underline m-4'>Projects</h3>
        <div className="col">
          <div class="card" style = {{width: "18rem",height:"auto"}}>
          <img src="https://images.pexels.com/photos/234257/pexels-photo-234257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div></div>
        <div className="col"><div class="card" style = {{width: "18rem",height:"auto"}}>
        <img src="https://images.pexels.com/photos/234257/pexels-photo-234257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="..."/>
         
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div></div>
        <div className="col"><div class="card" style = {{width: "18rem",height:"auto"}}>
        <img src="https://images.pexels.com/photos/234257/pexels-photo-234257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="..."/>
         
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div></div>
      </div>
    </div>
  )
}

export default Projects