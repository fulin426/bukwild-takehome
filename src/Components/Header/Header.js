import React from 'react';
import Logo from '../Images/abc_logo.svg';
import './header.css';

function Header({ pages, handleHeaderClick }) {
  return (
    <div className='header-container'>
      <div className='logo-button'>
        <img className='header-logo' src={Logo} />
        <button className='header-button'>Contact Us</button>
      </div>
      <div>
        {pages.map((page) =>
          <div key={page.slug} className='industry-services' onClick={() => handleHeaderClick(page.title)}>
            {page.title}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;