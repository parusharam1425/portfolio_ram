import React from 'react'

import ProjectItem2 from '../Assects/Rectangle 7.png';
import ProjectItem from '../Assects/pexels-elly-fairytale-3823207 1.png';
import ProjectItem3 from '../Assects/Rectangle 7 (1).png'
import '../Projects/index.css'

function Addproject() {
  return (
    <div className='main-contaner co'>
      <h1>Projects <hr className='hr' /></h1>
      <div className='column  d-flex flex-row justify-content-center  '>
        <div className='card-box p-5 col-12 col-md-6'>
          <h1>
            Project Name
          </h1>
          <p>
            I created this personal project in order<br /> to show how to cereate an interface in figma<br /> using a portfolio as in example
          </p>
          <button className='btn btn-outline-secondary'>
            View Orojecct
          </button>
        </div>
        <div>

          <img className='project_image col-12' alt='image1' src={ProjectItem} />
        </div>

      </div>
      <div className='column d-flex flex-row justify-content-center mt-4 mb-4 '>
        <div>
          <img className='project_image col-12' alt='image2' src={ProjectItem2} />
        </div>
        <div className='col-12 col-md-6 card-box-middle p-5 '>
          <h1>
            Project Name
          </h1>
          <p>
            I created this personal project in order<br /> to show how to cereate an interface in figma<br /> using a portfolio as in example
          </p>
          <button className='btn btn-outline-secondary'>
            View Orojecct
          </button>
        </div>
      </div>
      <div className='column d-flex flex-row justify-content-center '>
        <div className='col-12 col-md-6 card-box p-5'>
          <h1>
            Project Name
          </h1>
          <p>
            I created this personal project in order<br /> to show how to cereate an interface in figma<br /> using a portfolio as in example
          </p>
          <button className='btn btn-outline-secondary'>
            View Project
          </button>
        </div>
        <div>

          <img className='project_image col-12' alt='image3' src={ProjectItem3} />
        </div>

      </div>
    </div>
  )
}

export default Addproject