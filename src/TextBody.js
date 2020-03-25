import React from 'react'
import Sentence from './Sentence'
import psychoData from './psychoData'


function TextBody(){
    const sentence = psychoData.map(
        sentence => <Sentence
            key={sentence.id}
            ori={sentence.ori}
            trans={sentence.trans}
            wordcount={sentence.wordcount}
        />
    )


    return(
        <div className="wrapper">
            {sentence}
            <div className="push"></div>
        </div>
    )
}

export default TextBody