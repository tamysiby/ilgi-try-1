import React from 'react'
import Box from './Box'

class Sentence extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textStyle : {color : '#493a37'},
            show : false,
            understood : false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.showBox = this.showBox.bind(this);
        this.unshowBox = this.unshowBox.bind(this);

        this.doubleClickTimeout = 300;
        this.clickedTimeout = null;
    };

    showBox = () => {
        this.setState({show : true})
    }

    unshowBox = () => {
        this.setState({show : false})
    }

    handleClick(){
        if (!this.clickedTimeout) {
            this.clickedTimeout = setTimeout(()=> {
                this.clickedTimeout = null;

                if (!this.state.understood){
                    this.props.addProgress(this.props.wordcount)
                }; //to prevent from added progress to be added again
                this.setState({
                    textStyle : {color : 'green'},
                    understood : true,
                });
                this.unshowBox();

                console.log("understood");

            }, this.doubleClickTimeout);
        }
    }

    handleDoubleClick(){
        const fade = '#493a3798'

        clearTimeout(this.clickedTimeout);
        this.clickedTimeout = null;

        if (this.state.understood){
            this.props.subProgress(this.props.wordcount)
        };
        console.log("not understood");
        this.setState({
            textStyle : {color : fade},
            understood : false,
        });
        this.showBox();
    }

    render(){
        //to make detect spacings, so it won't be stylized when hovered
        let text = '';
        if (this.props.wordcount > 0) {
            text = 'text'
        } else {
            text = 'no-text'
        }

        return(
            <div className='sentencewrapper'>
                <p  className={text}
                    style={this.state.textStyle}
                    onClick={this.handleClick}
                    onDoubleClick={this.handleDoubleClick}
                >
                    {this.props.ori}
                </p>
                {this.state.show && <Box
                    unshowBox={this.unshowBox}
                    ori={this.props.ori}
                    trans={this.props.trans}
                />}
            </div>
        )
    }
}


export default Sentence
