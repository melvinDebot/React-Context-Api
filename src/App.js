import React, { Component } from 'react';
import './App.css';
// import Data from './Components/Data';
import Chart from './Components/Chart';
import Button from './Components/Button';

const api = [
  [
    {
      name : 'Musée',
      id: "Musée",
      value : 50,
      labels: "Musée",
      backgroundColor : "green"
    },
  ],
  [
    {
      name : 'Cinéma',
      id: "Cinéma",
      value : 10,
      labels: "Cinéma",
      backgroundColor : "purple"
    },
  ],
  [
    {
      name : 'Monument',
      id: "Monument",
      value : 13,
      labels: "Monument",
      backgroundColor : "red"
    },
  ]
]

let arrayJson = api
let test = arrayJson[0][0].value

const graphDatas = () => {
  let datas = []
  let colors = []
  api.forEach(type => {
    datas.push(type[0].value)
    colors.push(type[0].backgroundColor)
  })
  return {datas: datas, colors: colors}
}



class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{
        datasets:[
          {
            label:'Population',
            data: graphDatas().datas,
            backgroundColor: graphDatas().colors
          }
        ]
      },
      total : 0
    }
  }

  componentWillMount(){
    setTimeout(()=> {
      this.getTotal()
    }, 8000)
  }

  handleClick = () => {
    let yess = this.state.chartData.datasets[0].data[0]
    let number = this.state.chartData.datasets[0].data[0] ++
    this.setState({
      yess : number++
    })
  }

  getTotal = (i) => {
    let arrayApi = this.state.chartData.datasets[0].data
    let total = this.state.total
    for(i = 0; i < arrayApi.length; i++){
      total += arrayApi[i]
      
    }
    this.setState({
      total : total
    })
  }


  // componentDidMount(){
  //   this.setState({
  //     labels : this.state.chartData.labels.push(api[0])
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} total={this.state.total}/>
        <Button cliked={this.handleClick}/>
        {/* <Data /> */}
      </div>
    );
  }
}

export default App;