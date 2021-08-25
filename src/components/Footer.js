import React from 'react'
import { FaLinkedin,  FaGooglePlusSquare, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Footer.css'
import Aos from 'aos'
import {useEffect, useState} from 'react'

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 100,
        });
    }, []) 
    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here
    
      const copyToClipBoard = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          setCopySuccess('Number Copied!');
        } catch (err) {
          setCopySuccess('Failed to copy!');
        }

        setTimeout(() => {
            setCopySuccess('')
        }, 4000);
      };
    return (
        <div className = 'footer-section'>
            <ul className="list">
                {/* <li className="item"  data-aos = 'fade-up'><a href="https://www.facebook.com/ayeni.kehindeolutimileyin/" className="link"><FaFacebook className= 'icon' /><div className="info">connect on facebook</div></a></li> */}
                <li className="item" data-aos = 'fade-up'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=Basseyitim@gmail.com" className="link"><FaGooglePlusSquare className= 'icon' /><div className="info">connect on google</div></a></li>
                <li className="item" data-aos = 'fade-up'><span>{copySuccess}</span><a href="http"  className="link" onClick={(e) => {
                    e.preventDefault();
                    copyToClipBoard('+2348099302016')}}><FaPhoneAlt className= 'icon' /><div className="info">click to copy number</div></a></li>
                {/* <li className="item" data-aos = 'fade-up'><a href="https://github.com/Kehinded" className="link">< FaGithub className= 'icon' /><div className="info">connect on github</div></a></li> */}
                <li className="item" data-aos = 'fade-up'><a href="www.linkedin.com/in/tessie-bassey-a42304188" className="link"><FaLinkedin className= 'icon' /><div className="info">connect on linkedin</div></a></li>
                {/* <li className="item" data-aos = 'fade-up'><a href="https://twitter.com/KEHINDED_?s=09" className="link"><FaTwitter className= 'icon' /><div className="info">connect on twitter</div></a></li> */}
            </ul>
            <div className="copy-right" >
                <p className="text-1">copyright&copy;2021</p>
                <p className="text-2">AKOT</p>   
            </div>
        </div>
    )
}

export default Footer

// Basseyitim@gmail.com
// 08099302016
// https://www.behance.net/basseyitim24f8
// www.linkedin.com/in/tessie-bassey-a42304188
