import React, {useState} from 'react'
import '../styles/Header.css'
import Navigation from './Navigation'
import UserImg from '../images/user-tessie.jpg'
import {   FaGooglePlusSquare, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
    const [contactShow, setContactShow] = useState(false)
    return (
        <div className = 'header'>
            <figure className="img-box"><img src={UserImg} alt="" className="img" /></figure>
            <Navigation showContact={() => setContactShow(!contactShow)}/>
           {
               contactShow && (
                <div className="contact-box">
                <ul className="list">
                    <li className="item">
                        <span><FaPhoneAlt /></span>+2348099302016
                    </li>
                    <li className="item">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Basseyitim@gmail.com" className="link"><FaGooglePlusSquare className= 'icon' /><div className="info">connect on google</div></a>
                    </li>
                    <li className="item"></li>
                </ul>
            </div>
               )
           }
        </div>
    )
}

export default Header
