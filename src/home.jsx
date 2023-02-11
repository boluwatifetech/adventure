import React from 'react';
import Card from './card'
import {FaPlay} from 'react-icons/fa'
 function Home() {
  return (
    <>
    <div className='home-container'>
    <video  autoPlay loop muted>
<source src='videos/vid5.mp4'></source>
</video>
    <div>
    <h1>biggest adventure</h1>
    <p>what are you still waiting for</p>
    <div className='container-btn'>
<button className='btn1'>get started</button>
<button className='btn2'>watch trailer <FaPlay className='center-fa'/></button>
    </div>
    </div>
   </div>
   <div className='main-content'>
 <Card/>
   </div>
</>
  );
}
export default Home
