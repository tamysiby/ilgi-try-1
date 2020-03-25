import React from 'react'
import TextBody from './TextBody'
import Header from './Header'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {


  return(
    <div className="body">
      <Header/>
      <TextBody />
      <ProgressBar />
    </div>

  )

}


export default App;

//hooks
  // const [isShown, setIsShown] = React.useState(false);
  // let className = 'text';
  // return(
  //   <div className='wrapper'>
  //     <p 
  //       className='text'
  //       // onMouseEnter={() => setIsShown(true)}
  //       // onMouseLeave={() => setIsShown(false)}
  //       >
  //       포기하지마
  //     </p>
  //   </div>
  // )


  //context api
//const myContext = React.createContext()

// function MyProvider()  {
//   return(
//     <myContext.Provider value="">

//     </myContext.Provider>
//     //insert data in between those
//   )
// }