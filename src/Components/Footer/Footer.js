import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-main-txt'>Nemo enim ipsam volutptame quia volutas</div>
      <div className='footer-talk-txt'>
        Let's talk 
        <span className='footer-arrow-icon '><i class="fas fa-long-arrow-alt-right fa-2x" /></span>
      </div>  
    </div>
  );
}

export default Footer;