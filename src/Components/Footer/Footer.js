import React from 'react'
import Insta from '../Assects/ph_instagram-logo-fill.png';
import Linkedin from '../Assects/bi_linkedin.png';
import Email from '../Assects/bi_envelope-fill.png';
import Image from '../Assects/Vector.png'

import '../Footer/Footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className='main'>
        <div className='justify-content-center align-items-center'>
            <img className='icons' alt='icons' src={Insta}/>
            <img className='icons icon' alt='icons' src={Linkedin}/>
            <img className='icons' alt='icons' src={Email}/>
            <div className='mt-3'>
                Copyright @{year}. All rights reserved
            </div>

        </div>
        <div>
            <img className='bottom_image' alt='logo' src={Image}/>

        </div>
    </div>
  );
}

export default Footer;