import React from 'react'
import Image from "../Utility/image.jpeg"
const Header = () => {
  return (
    <>
        <div className='header'>
            <img src={Image} alt="logo Image" id='logo-image'/>
            <h1 id='header-text'>Task Manager</h1>
        </div>
        <hr />
    </>
    
  )
}
export default Header;