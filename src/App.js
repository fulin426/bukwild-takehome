import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Marquee from './Components/Marquee/Marquee';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [backGround, setBackGround] = useState('');

  useEffect(() => {
    fetch('content.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
    .then(res => res.json())
    .then(json => {
      setData(json.pages);
      setCurrentPage(json.pages[0].blocks[0]);
      setBackGround(json.pages[0].blocks[0].background);
    })
  }, []);

  const handleHeaderClick = (title) => {
    const newPage = data.find(page => title === page.title);
    setCurrentPage(newPage.blocks[0]);
    setBackGround(newPage.blocks[0].background);
  }

  return (
    <div style={{backgroundImage: `url(/Images/backgrounds/${backGround})`}}>
      <div className='App'>
        <Header handleHeaderClick ={handleHeaderClick} pages={data}/>
        <Marquee currentPage={currentPage} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
