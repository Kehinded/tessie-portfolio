import React from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import {FaBoxes, FaAngleDown, FaAddressCard} from 'react-icons/fa'

const Navigation = ({showContact}) => {
    return (
        <ul className = 'list'>
            <li className="item  active">
                <Link to = '/' className="link"> <FaAddressCard className = 'icon' /><span>about</span></Link>
            </li>
            <li className="item">
            <a target= '_blank' rel="noreferrer"  href="https://www.behance.net/basseyitim24f8" className="link"><FaBoxes  className = 'icon'  /><div className="info">work</div></a>
            </li>
            <li className="item">
                <Link to = '/' onClick={showContact} className="link"><span>contact</span> <FaAngleDown className = 'icon' /></Link>
            </li>
        </ul>
    )
}

export default Navigation
