import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className=' footer-section'>
        <div className=' footer-section-top'>
            <div className=' footer-address'>
                <h2>Furino</h2>
                <p>400 University Drive Suite 200 Coral</p>
                <p>Gables</p>
                <p>FL 33134 USA</p>
            </div>
            <div className=' footer-link'>
                <h4>Links</h4>
                <ul>
                    <Link className='link' to="#"><li>Home</li></Link>
                    <Link className='link' to="#"><li>Shop</li></Link>
                    <Link className='link' to="#"><li>About</li></Link>
                    <Link className='link' to="#"><li>Contact</li></Link>
                </ul>
            </div>
            <div className=' footer-help'>
            <h4>Help</h4>
            <ul>
            <Link className='link' to="#"><li>Payment Option</li></Link>
            <Link className='link' to="#"><li>Return</li></Link>
            <Link className='link' to="#"><li>Privacy Policies</li></Link>
                    
                </ul>
            </div>
            <div className=' footer-newsletter'>
            <h4>Newsletter</h4>
            <div>
                <input type='email' className=' footer-email' placeholder='Enter Your Email Address' />
                <button className=' footer-btn'>SUBSCRIBE</button>
            </div>
            </div>
        </div>
        <div className=' footer-section-bottom'>
            <p className=' footer-text'>2023 furino. All rights reverved</p>
        </div>
    </section>
  )
}

export default Footer