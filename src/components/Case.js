import React from 'react'
import '../styles/Work.css'

const Case = ({image, text, link}) => {
    return (
        <div className= 'case-box'>
            <figure className="img-box"><img src={image} alt="" className="img" /></figure>
            <p className="text">{text}</p>
            <a target= '_blank' rel="noreferrer" href={link} className="info-link"><button className="btn">see case study</button></a>
        </div>
    )
}

export default Case
