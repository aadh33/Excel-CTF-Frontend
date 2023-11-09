import React from 'react'
import './Navbar.css'
import excelLogo from '../../assets/png/excel_logo.png'
const Navbar = () => {
  return (
    <div className='navbar__container'>
        <div className="navbar__main_body">
            <img className='excel_logo' src={excelLogo} alt="" />
            <img className='iedc_logo' src={excelLogo} alt="" />
        </div>
    </div>
  )
}

export default Navbar