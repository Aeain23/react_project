import React from 'react';
import './Footer.css';
import andriod from '../../img/android.png';
import apple from '../../img/apple.png';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='footer__box row'>
        <div className='col-md-6 col-sm-12'>
          <h1 className='term'>Term of Use</h1>
          <p>
            All videos and shows on this platform are trademarks of, and all
            related images and content are the property of, Movie DB.
            Duplication and copy of this is strictly prohibited.
          </p>
        </div>
        <div className='col-md-2 col-sm-12'>
          <h1>Follow Us</h1>
          <button className='btn facebook mr-2'>
            <i className='fa fa-facebook'></i>
          </button>
          <button className='btn twitter mr-2'>
            <i className='fa fa-twitter'></i>
          </button>
          <button className='btn youtube'>
            <i className='fa fa-youtube'></i>
          </button>
        </div>
        <div className='col-md-4 col-sm-12'>
          <h1>Download</h1>
          <img src={andriod} alt='Android' className='android' />
          <img src={apple} alt='Apple' className='apple' />
        </div>
      </div>

      <p className='copyright'>
        © 2021 Movie App. All Rights Reserved. Developed by
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noreferrer'
        >
          A Eain.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
