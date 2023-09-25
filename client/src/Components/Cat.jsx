import React from 'react';
import ProImgOne from '../Components/assets/p1.jpg'
import ProImgTwo from '../Components/assets/p2.jpg'
import ProImgThree from '../Components/assets/p3.jpg'

function Cat() {
  return (
    <section className='cat'>
      <div className=' cat-left'>
        <div className=' cat-left-inner'>
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className=' banner-btn'>Explore More</button>
        </div>
      </div>
      <div className=' cat-right'>
        <div className=' cat-right-one'>
          <img src={ProImgOne} width="100%" height="100%" alt='#' />
        </div>
        <div className=' cat-right-two'>
          <img src={ProImgTwo} width="100%" height="100%" alt='#' />
        </div>
        <div className=' cat-right-three'>
          <img src={ProImgThree} width="100%" height="100%" alt='#' />

        </div>
      </div>
    </section>
  )
}

export default Cat
