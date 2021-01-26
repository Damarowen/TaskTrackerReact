import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {


  return (
    <div className="container">
    <Header/>
    <Tasks/>
    </div>

  );
}

//* if use class

// import React from 'react'


// class App extends React.Component {
//   render(){
//     return <h1>heelo from a class</h1>
//   }
// }


export default App;
