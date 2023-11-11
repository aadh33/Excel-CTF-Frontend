import React from 'react'
import './Navbar.css'
import excelLogo from '../../assets/png/excel_logo.png'
import IEDCLogo from '../../assets/png/IEDCLogo.png'
const Navbar = () => {
  return (
    <div className='navbar__container'>
        <div className="navbar__main_body">
            <img className='excel_logo' src={excelLogo} alt="" />
            <p className='and__txt'>AND</p>
            <img className='iedc_logo' src={IEDCLogo} alt="" />
        </div>
        <p className='presents__txt'>Presents</p>
    </div>
  )
}

export default Navbar