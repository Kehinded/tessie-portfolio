import React from 'react'
import Case from './Case'
import '../styles/Work.css'
import caseOneImg from '../images/caseOne.png'
import caseTwoImg from '../images/caseTwo.png'

const cases = [
    {
    image: `${caseOneImg}`,
    text: "A world citizen donation app for the less priveledge.",
    link: "https://1drv.ms/p/s!AjsPwxPnQy11b3C_3BsKgKcVkp4?e=gEAL0T"
},
{
    image: `${caseTwoImg}`,
    text: "A skincare app that also allows access to a dermatologist at the comfort of your space.",
    link: "https://1drv.ms/p/s!AjsPwxPnQy11dGtY6UP9xsiYkDc?e=qIMKEy"
}
]

const Work = () => {
    // const [caseStudy, setCaseStudy] = useState(cases)
    return (
        <div className = 'work-section'>
            {
             cases.map((child, index) => (
                 <Case
                  key = {index}
                  image = {child.image}
                  link = {child.link}
                  text = {child.text}
                  />
             ))
            }
        </div>
    )
}

export default Work
