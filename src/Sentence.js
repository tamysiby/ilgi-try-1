import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

function Sentence(props){
    const [textStyle, setTextStyle] = useState({
        color: '#493a37'
    })

    function handleClick(){
        setTextStyle({
            color: 'green'
        })
        console.log("understood")
        return(
            <ProgressBar wordcount={props.wordcount} />
        )
    }

    function handleDoubleClick(){
        console.log("not understood")
        setTextStyle({
            color: '#493a3798'
        })
    }

    //let className="" make a new class that won't do anything when hovered over when props.wordcount === 0
    
    return(
        <div className="sentencewrapper">
            <p  className='text'
                style={textStyle}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
            >
                {props.ori}
            </p>
        </div>
    )
}


export default Sentence
