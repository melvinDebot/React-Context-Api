import React from 'react';
import Context from './Context';

class ContextProvider extends React.Component{
  constructor(){
    super();
    this.state = {
      items : [
        {
          id : 1,
          name : "Test",
          body : "La cité"
        },
        {
          id : 2,
          name : "Test Deux",
          body : "Wesh la street"
        },
      ]
    }
  }

  // getDataFromAPI(){
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((response) => response.json())
  //     .then(json => this.setState({items : json}))
  // }
  // componentWillMount(){
  //   this.getDataFromAPI();
  // }

  render(){
    return(
      <Context.Provider value={{posts: this.state.items}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider;