import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/index.css';

const Navbar = () => {
  return (
    <div className='main-contaner'>
      <div className='row'>
        <div className='col-6 col-md-6'>
          <p>Parusharam</p>
          <div>
            <h4 className='heading'>UI/UX DESIGNER</h4>
            <p className='heading-description'>
              Hello, my name is Parusharamulu
            </p>
            <p>
              short text with details about you, what you do or your professional career.
              You can add more information on the about page
            </p>
            <div>
              <Link to='/projects' className='btn btn-primary m-1'>
                Projects
              </Link>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-secondary'
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className='col-6 col-md-6 '>
          <ul className='nav_links'>
            <li>
              <Link to='/about'>Add</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
