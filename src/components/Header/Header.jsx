import React from 'react'
import '../Header/Header.css'
import qwe from '../img/Frame.png'
import log from '../img/frame1.png'
import icon1 from '../img/Frame2.png'
import icon2 from '../img/Frame3.png'
import icon3 from '../img/Frame4.png'
const Header = () => {
  return (
    <div className='countainer'>
      <div className='nav'>
          <img src={qwe} alt="" />
      </div>
      <div className='nav1'>
        <div className='ul1'>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>OV Kits</li>
          </ul>
        </div>
        <div className='logo'>
          <img src={log} alt="" />
        </div>
        <div className='icon'>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
