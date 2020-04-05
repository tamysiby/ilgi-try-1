import React from 'react'

class Box extends React.Component {
    /*
    how do i make box on top of everything
    how to map a sentence into separate words. then make a <Word /> that would
    accept props from sentence and map the sentence received then dispay it like sentence

    when mouse hovers on wrd, the translated word will also be highlighted
    but that would mean tagging/extracting word one by one
    word component
    */

    render() {
        return(
            <div className='box'>
                <button onClick={this.props.unshowBox}>close</button>
                <button>add to flashcard</button>
                <h2>Korean: </h2>
                <p className='no-text'>{this.props.ori}</p>
                <br></br>
                <h2>English: </h2>
                <p className='no-text'>{this.props.trans}</p>
                <br></br>
            </div>
        )
    }
}

export default Box