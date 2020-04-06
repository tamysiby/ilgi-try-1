import React from 'react'
import psychoData from './psychoData'


class Footer extends React.Component {


    render(){
        var totalWords = 0;

        for(var i=0 ; i < psychoData.length ; i++){
            totalWords = totalWords + psychoData[i].wordcount
        }

        const percentage = this.props.progress / totalWords * 100;
        //how to round numbers into nearest whole number

        return(
            <div className="footer">
                <p>{Math.round(percentage)}%</p>
                <ProgressBar done={percentage} />
            </div>
        )
    }
}

//merge this thing into ^^^ use class
function ProgressBar(props){
    const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`
		}
		
		setStyle(newStyle);
	}, 0);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}

export default Footer
