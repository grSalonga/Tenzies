import React from 'react'
import './styles/dice.css'



export default function (props){
    const [isClicked, setIsClicked] = React.useState(false)
    const backColor = isClicked ? '#59E391' : '#ffffff'
    
    return (
        <div className='die' 
            style={{backgroundColor:backColor}} 
            onClick={() => setIsClicked(prev => !prev)}
        >
            {props.value}
        </div>
    )
}