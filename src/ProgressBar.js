import React from 'react'
import psychoData from './psychoData'

class ProgressBar extends React.Component {
    render(){
        var totalWords = 0;

        for(var i=0 ; i < psychoData.length ; i++){
            totalWords = totalWords + psychoData[i].wordcount
        }

        const percentage = this.props.progress / totalWords * 100;
        //how to round numbers into nearest whole number

        return(
            <div className='progressbar'>
                {Math.round(percentage)}%
            </div>
        )
    }
}


export default ProgressBar
