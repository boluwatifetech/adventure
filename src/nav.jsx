import React,{useRef} from 'react';
import {Link} from 'react-router-dom'
import './main.css'
import {FaBars,FaTimes} from 'react-icons/fa'
 function Nav() {
const setRef=useRef()
const showBtn=()=>{
    setRef.current.classList.toggle('composed-nav')
}
  return (
    <header>
      <h1>trvl</h1>
      <nav ref={setRef}>
        <ul>
            <li><Link to='/' onClick={showBtn} className='navs'>home</Link></li>
            <li><Link to='/service' onClick={showBtn} className='navs'>service</Link></li>
            <li><Link to='/product' onClick={showBtn} className='navs'>product</Link></li>
            <li><Link to='/sign' onClick={showBtn}><button className='btn-nav'>sign up</button></Link></li>
</ul>
<button className='nav-btn close' onClick={showBtn}>
    <FaTimes/>
    </button>
      </nav>
      <button className='nav-btn open' onClick={showBtn}>
<FaBars/>
</button>
          </header>
  );
}
export default Nav