import React from 'react'
import TextBody from './TextBody'
import Header from './Header'
import './index.scss'
import Footer from './Footer'

/*
to do list:
reset button
make <Word /> component
progress bar
  merge progress bar to class
with routher, make main page that leads to texts, flashcards
  get router
navbar
make flashcards page (set this out on paper)
make data changeable, learn how to connect to database
  that or make page that would allow inputing data (admin side bgitu)
*/

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      progress : 0,
      show : true,
    };

    this.addProgress = this.addProgress.bind(this);
    this.subProgress = this.subProgress.bind(this);

  };

  addProgress = (wc) => {
    this.setState({
      progress : this.state.progress + wc,
    });
  }

  subProgress = (wc) => {
    this.setState({
      progress : this.state.progress - wc,
    });
  };

  render(){
    return(
      <div>
        <div className="container">
          <Header />
          <TextBody addProgress={this.addProgress} subProgress={this.subProgress}/>
          <Footer progress={this.state.progress}/>
        </div>
      </div>
    )
  }
}


export default App;