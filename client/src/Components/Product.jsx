import React from 'react'
import { useState } from 'react';
import ProImgOne from '../Components/assets/p1.jpg'
import ProImgTwo from '../Components/assets/p2.jpg'
import ProImgThree from '../Components/assets/p3.jpg'
import ProImgFour from '../Components/assets/p4.jpg'
import ProImgFive from '../Components/assets/p5.jpg'
import ProImgSix from '../Components/assets/p6.jpg'
import ProImgSeven from '../Components/assets/p7.jpg'
import ProImgEight from '../Components/assets/p8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals, faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Product() {
  const [data,setData] = useState([
    {
      name:'Some Text',
      image:ProImgOne,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgTwo,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgThree,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgFour,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgFive,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgSix,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgSeven,
      desc:'Lorem ipsum dolor',
      price:7000
    },
    {
      name:'Some Text',
      image:ProImgEight,
      desc:'Lorem ipsum dolor',
      price:7000
    },
  ])
  return (
    <section className=' product-section'>
      <h1>Our Products</h1>
      <div className=' product-section-inner'>
        {
          data&&data.map((item,idx)=>{
            return(
              <ProductCard name={item.name} image={item.image} desc={item.desc} price={item.price} key={idx}/>
            )
          })
        }

      </div>
      <button className=' product-section-btn'>Show More</button>
    </section>
  )
}

export default Product;




function ProductCard({name,image,desc,price}){
  return(
<div class="container">
  <div className=' container-img'>
    <img src={image} width="100%" height="100%" alt="#" />
  </div>
  <div className='container-details'>
    <h3>{name||"-"}</h3>
    <p>{desc||"-"}</p>
    <p>Rp {price}</p>
  </div>
  <div class="overlay">
    <span>
    <button className=' overlay-btn'>Add to Cart</button>
    <div className=' overlay-div'>
      <button className='overlay-div-btn'><FontAwesomeIcon icon={faShareNodes} />Share</button>
      <button className='overlay-div-btn'><FontAwesomeIcon icon={faEquals} />Compare</button>
      <button className='overlay-div-btn'><FontAwesomeIcon icon={faHeart} />Like</button>
    </div>
    </span>
  </div>
</div>
  )
}
