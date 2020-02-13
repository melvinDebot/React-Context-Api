import React from 'react';
import './App.css';

import Title from './Title';


class App extends React.Component{
  render(){
    return(
      <div>
        <h1>DATA WE CONSUMED</h1>
        <Title />
      </div>
    )
  }
}

export default App;

// {(val)=> <div>
//   {
//     val.posts.map(p=><div>
//       <h5>{p.title}</h5>
//     </div>)
//   }
// </div>}
