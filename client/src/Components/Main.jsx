import React from 'react'
import { useState } from 'react'
import mainOne from '../Components/assets/main-one.jpg'
import mainTwo from '../Components/assets/main-two.jpg'
import mainThree from '../Components/assets/main-three.jpg'


function Main() {

    const [data,setData] =useState([
        {
            img:mainOne,
            label:'Dining'
        },
        {
            img:mainTwo,
            label:'Living'
        },
        {
            img:mainThree,
            label:'Bedroom'
        }
    ])


  return (
    <section className=' main-section'>
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className=' main-selection-inner'>
            {
                data&&data.map((element,idx)=>{
                    return(
                        <InnerItem img={element.img} label={element.label}  key={idx}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Main



function InnerItem({img,label}){
    return(
        <div className=' main-selection-inner-item'>
            <div className=' main-selection-inner-item-img'>
                <img src={img} width="100%" height="100%" alt='#' />
            </div>
            <h4>{label}</h4>
        </div>
    )
}