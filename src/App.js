import React from 'react';
import './App.css';
import Data from './Components/Data';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      chartData : {},
      apiData: [

      ]
    }
  }

  // componentWillMount(){
  //   this.getChartData();
  //   this.callApi()
  // }

  // getChartData(){
  //   let apiData = this.state.apiData
  //   this.setState({
  //     chartData : {
  //       labels : [
  //         'Boston1', 'Lowell', 'Cambrigride', 'New York', 'paris'
  //       ],
  //       datasets : [
  //         {
  //           labels : 'population',
  //           data: [
  //             4,
  //             10,
  //             14,
  //             20,
  //             2
  //           ],
  //           backgroundColor : [
  //             'red', 'green', 'yellow', 'lightblue', 'pink'
  //           ]
  //         }
  //       ]
  //     }
  //   })
  // }

  // callApi(){
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res => res.json())
  //   .then((result) => {
  //     this.setState({
  //       apiData : result
  //     })
  //   })
  //   console.log(this.state.apiData)
  // }
  
  render(){
    return(
      <div>
        <Data />
      </div>
    )
  }
}

export default App;

