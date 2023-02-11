import React from 'react';
import { FaWhatsapp,FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';

function Card(){
    return(
        <div className='card'>
        <h1>check out this epic destination</h1>
<div className='grid-container'>
    <div className='full-image'>
<div className='cover-image'>
    <img src='images/pic1.jpeg'/>
    <button>adventure</button>
    <p>Explore the hidden waterfall in thailand </p>
</div>
    </div>
     <div className='full-image'>
<div className='cover-image'>
    <img src='images/pic2.jpeg'/>
    <button>adventure</button>
    <p>Explore different beautiful things on vacation</p>
</div>
    </div>
</div>
<div className='grid-container2'>
    <div className='full-image2'>
        <div className='cover-image2'>
            <img src='images/pic3.jpeg'/>
            <button>luxury</button>
            <p>paris ocean give you best view of life</p>
        </div>
    </div>
        <div className='full-image2'>
        <div className='cover-image2'>
            <img src='images/pic4.jpeg'/>
            <button>luxury</button>
            <p>beautiful life beside the ocean in maimi</p>
        </div>
    </div>
        <div className='full-image2'>
        <div className='cover-image2'>
            <img src='images/pic6.jpeg'/>
            <button>luxury</button>
            <p>maitani ocean is the best place to spend a nice time</p>
        </div>
    </div>
        <div className='full-image2'>
        <div className='cover-image2'>
            <img src='images/pic7.jpeg'/>
            <button>luxury</button>
            <p>the weather at usa ocean warm the body</p>
        </div>
    </div>
        <div className='full-image2'>
        <div className='cover-image2'>
            <img src='images/pic8.jpeg'/>
            <button>luxury</button>
            <p>catch the best of the best</p>
        </div>
    </div>
        <div className='full-image2'>
        <div className='cover-image2'>
            <img src='images/pic9.jpeg'/>
            <button>luxury</button>
            <p>valuable place to be in leisure time</p>
        </div>
    </div>

</div>
<div className="footer">
<h1>join the adventure newsletter to receive our best vacation deals </h1>
<p className='para'>you can unsubscribe at anytime</p>
<form action='https://formspree.io/f/moqzenby' method='POST' className='camp-btn'>
    <input type=' enter your email' name='email' placeholder='email'/>
    <button type='submit'>submit</button>
    </form>
    <div className='flex-footer'>
        <div className='about'>
            <h3>about us</h3>
            <p>how it works</p>
              <p>testimonials</p>
                <p>careers</p>
                  <p>terms of service</p>
                  
        </div>
         <div className='about'>
            <h3>contact us</h3>
            <p>contact</p>
              <p>support</p>
                <p>destinations</p>
                  <p>sponsorships</p>
                  
        </div>
         <div className='about'>
            <h3>videos</h3>
            <p>submit videos</p>
              <p>ambassadors</p>
                <p>agency</p>
                  <p>influencer</p>
                  
        </div>
         <div className='about'>
            <h3>social media</h3>
            <a href='https://facebook.com/Bolu Abiola'>facebook</a>
<a href='https://twitter.com/Boluwatife Abiola'>twitter</a>
 <a href='https://instagram.com/Boluwatife Abiola'>instagram</a>
<a href='https://whatsapp.com/07038513843'>whatsapp</a>
                  
        </div>
    </div>
    <div className='final-flex'>
    <h2>blaqstix</h2>
<div className='display'>
            <a href='https://facebook.com/Bolu Abiola'><FaFacebook/></a>
<a href='https://twitter.com/Boluwatife Abiola'><FaTwitter/></a>
 <a href='https://instagram.com/Boluwatife Abiola'><FaInstagram/></a>
<a href='https://whatsapp.com/07038513843'><FaWhatsapp/></a>
        </div>
    </div>
</div>
        </div>
    )
}
export default Card