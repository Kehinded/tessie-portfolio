import React from 'react'
import '../styles/About.css'
import TextAnimation from './TextAnimation'

const About = () => {
    return (
        <div className = 'about-section'>
            <h2 className="title">Hey there,i’m <div className= 'name'><TextAnimation /> Bassey</div> a ui/ux designer from Nigeria.</h2>
            <p className="text">I have a passion for solving problems using designs, and when am not designing
             i am  trying to code my designs</p>
        </div>
    )
}

export default About
