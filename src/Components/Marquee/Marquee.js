import React from 'react';
import './marquee.css';

function Marquee({ currentPage }) {
  const { cta, subhead } = currentPage;
  return (
    <div className='marquee-container'>
      <div className='marquee-main-sub-wrapper'>
        <div className='marquee-main'>{cta}</div>
        <div className='marquee-sub'>{subhead}</div>
      </div>
    </div>
  );
}

export default Marquee;