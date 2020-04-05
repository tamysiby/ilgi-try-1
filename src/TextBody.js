import React from 'react'
import Sentence from './Sentence'
import psychoData from './psychoData'

class TextBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: psychoData,
        };
    };

    render() {
        return(
            <div className="wrapper">
                {this.state.data.map(data =>
                    <Sentence
                        key={data.id}
                        ori={data.ori}
                        trans={data.trans}
                        wordcount={data.wordcount}
                        addProgress={this.props.addProgress}
                        subProgress={this.props.subProgress}
                        understood={this.state.understood}
                        />)}
                <div className="push"></div>
            </div>
        )
    }
}

export default TextBody