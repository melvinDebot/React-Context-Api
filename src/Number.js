import React from 'react';
import Context from './Context';
import ContextProvider from './ContextProvider';

const Number = (props) => {
  return(
    <div>
      <h6>{props.number}</h6>
    </div>
  )
}

export default Number;

// {(data) => <div>
//   {
//     data.posts.map(p => <div>
//       <h6>{p.title}</h6>
//     </div>)
//   }
// </div>}