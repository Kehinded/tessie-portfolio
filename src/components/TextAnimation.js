import React, {useState, useEffect} from 'react'
import {useInterval} from 'react-use'
import styled, { keyframes } from 'styled-components'

export default function TextAnimation () {
    
    const textOneArray = "Theressa".split("")
    const textTwoArray = "Tessie".split("")
    const [items, setItems] = useState(textOneArray)
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(false)

    useInterval(
        () => {
          setItems(textOneArray)
          setCount(count + 1)

        //   change again
        if(count === 1){
            setCount(0)
            setItems(textTwoArray)
        }
    }, play? 20000 : null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(textTwoArray)
            setPlay(true)
        }, 20000);
        return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Wrapper>{items.map((item, index) => (
            <span key={index}>{item}</span>
        ))}</Wrapper>   
    )
}

const animation = keyframes`
 0% { opacity: 0; transform: translateY(-100px)  rotateZ(45deg) skewY(45deg); filter: blur(10px);}
 25% { opacity: 1; transform: translateY(0px) rotateZ(0deg) skewY(0deg) ; filter: blur(0px); }
 75% { opacity: 1; transform: translateY(0px) rotateZ(0deg) skewY(0deg) ; filter: blur(0px); }
 100% { opacity: 0; transform: translateX(100px) rotateZ(45deg) skewY(45deg); filter: blur(10px);}
`

const Wrapper = styled.span`   
display: inline-block;
width: 10rem;
 span{
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 20s;
    animation-fill-mode: backwards;  
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1,0,0,1);
 }
 span:nth-child(1){
     animation-delay: .1s;
 }
 span:nth-child(2){
    animation-delay: .2s;
}
span:nth-child(3){
    animation-delay: .3s;
}
span:nth-child(4){
    animation-delay: .4s;
}
span:nth-child(5){
    animation-delay: .5s;
}
span:nth-child(6){
    animation-delay: .6s;
}
span:nth-child(7){
    animation-delay: .7s;
}
span:nth-child(8){
    animation-delay: .8s;
}
span:nth-child(9){
    animation-delay: .9s;
}
span:nth-child(10){
    animation-delay: 1s;
}
`


