import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {  faCartShopping, faMagnifyingGlass, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    let navItemList = [
        {
            label:'Home',
            links:'#'
        },
        {
            label:'Shop',
            links:'#'
        },
        {
            label:'About',
            links:'#'
        },
        {
            label:'Contact',
            links:'#'
        }
    ]

    let navIconList = [
        {
            icon:faUserCheck,
            links:'#'
        },
        {
            icon:faMagnifyingGlass,
            links:'#'
        },
        {
            icon:faHeart,
            links:'#'
        },
        {
            icon:faCartShopping,
            links:'#'
        }
    ]

  return (
    <div className=' navbar-main'>
        <div className=' nabar-inner'>
            <h2> Furniro</h2>
            
                <ul className=' navbar-links'>
                    {
                        navItemList&&navItemList.map((item,idx)=>{
                            return(
                                <NavbarLinkItem label={item.label||"-"} link={item.links||"#"}   key={idx}/>
                            )
                        })
                    }
                </ul>
            
            <div className=' navbar-icons'>
                {
                    navIconList&&navIconList.map((icon,idx)=>{
                        return(
                            <NavbarIconItem link={icon.links||'#'} icon={icon.icon||""}  key={idx}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar


function NavbarLinkItem({label,link}){
    return(
        <Link to={link} className='link'>
            <li className=' navbar-link-item'>{label}</li>
        </Link>
    )
}


function NavbarIconItem({icon,link}){
    return(
        <Link to={link} className='link'>
            <div className=' navbar-icons-item'> 
            <FontAwesomeIcon icon={icon} />
            {/* {icon} */}
            </div>
        </Link>
    )
}