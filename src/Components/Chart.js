import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import BarChart from 'react-bar-chart';


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  componentWillMount(){
    this.getArray()
  }

  getArray(){
    let test = this.state.chartData
    let datas = []
    test.map(tt => {
      
    })
    console.log(test)
  }

  render(){

    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
        />
        <p>Vous avez fait {this.props.total} activités</p>
      </div>
    )
  }
}

export default Chart;