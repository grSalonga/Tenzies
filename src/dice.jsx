import React from 'react'
import './styles/dice.css'



export default function (props){
    const backColor = props.isToggled ? '#59E391' : '#ffffff'
    
    return (
        <div className='die' 
            style={{backgroundColor:backColor}} 
            onClick={() => props.handleClick(props.id)}
        >
            {props.value}
        </div>
    )
}