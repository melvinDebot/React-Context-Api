import React from 'react';
import Context from './Context';
import ContextProvider from './ContextProvider';
import Number from './Number';


class Title extends React.Component{
  render(){
    return (
      <div>
        <ContextProvider>
          <Context.Consumer>
            {(data) => <div>
              {
                data.posts.map(p => <div>
                  <Number number={p.id}/>
                  <h4>{p.name}</h4>
                </div>)
              }
            </div>}
          </Context.Consumer>
        </ContextProvider>
      </div>
    )
  }
}

export default Title;

// {(val)=> <div>
//   {
//     val.posts.map(p=><div>
//       <h5>{p.title}</h5>
//     </div>)
//   }
// </div>}
