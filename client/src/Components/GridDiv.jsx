import React from 'react'
import ProImgOne from '../Components/assets/p1.jpg'
import ProImgTwo from '../Components/assets/p2.jpg'
import ProImgThree from '../Components/assets/p3.jpg'
import ProImgFour from '../Components/assets/p4.jpg'
import ProImgFive from '../Components/assets/p5.jpg'
import ProImgSix from '../Components/assets/p6.jpg'
import ProImgSeven from '../Components/assets/p7.jpg'
import ProImgEight from '../Components/assets/p8.jpg'


function GridDiv() {
  return (
    <section >
      <h1>Share your setup with</h1>
      <h1 className=' grid-div-heading'>#FuniroFuniture</h1>
        <div className='grid-div'>
            <div className=' grid-one'>
              <img  src={ProImgEight} alt='#' />
            </div>
            <div className=' grid-two'>
            <img  src={ProImgSix} alt='#' />
            </div>
            <div className=' grid-three'>
            <img  src={ProImgFour} alt='#' />
            </div>
            <div className=' grid-four'>
            <img  src={ProImgTwo} alt='#' />
            </div>
            <div className=' grid-five'>
            <img  src={ProImgSeven} alt='#' />
            </div>
            <div className=' grid-six'>
            <img  src={ProImgFive} alt='#' />
            </div>
            <div className=' grid-seven'>
            <img  src={ProImgOne} alt='#' />
            </div>
            <div className=' grid-eight'>
            <img  src={ProImgEight} alt='#' />

            </div>
            <div className=' grid-nine'>
            <img  src={ProImgThree} alt='#' />
            </div>
        </div>
    </section>
  )
}

export default GridDiv;