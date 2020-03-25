import React from 'react'
import psychoData from './psychoData'
//import {progress} from './Sentence'

// function Progress(props){
//     return(
//         <div>{progress}</div>
//     )
// }

function ProgressBar(props) {
    //const [progressUp, setProgressUp] = useState(0)
    //setProgressUp(progressUp + addProgress)
    
    console.log(props.wordcount)



    var totalWords = 0
    for( var i=0 ; i<psychoData.length ; i++ ){
        totalWords = totalWords + psychoData[i].wordcount
    }

    return(
        <div className="progressbar">
            progress bar
            {props.wordcount}/{totalWords}
        </div>
    )
    //return(
    //    <div className="progressbar">
    //    {progressUp}/{totalWords}
    //    </div>
    //)
}

export default ProgressBar
