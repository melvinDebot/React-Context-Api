import React from 'react';

//  Librairie DataViz
import { ResponsivePie } from '@nivo/pie';
import BarChart from 'react-bar-chart';


class Data extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataApi : [
        {
          name : 'Musée',
          id: "Musée",
          value : 10,
          label: "Musée",
          color : "green"
        },
        {
          name : 'Cinéma',
          id: "Cinéma",
          value : 15,
          label : "Cinéma",
          color: "red"

        },
        {
          name : 'Monument',
          id: "Monument",
          value : 5,
          label : "Monument",
          color : "yellow"
        }
      ],
      total : 0
    }
  }

  componentWillMount(){
    this.getTotaux()
  }

  getTotaux = (i) => {
    let dataApi = this.state.dataApi;
    let total = this.state.total;
    for(i = 0; i < dataApi.length; i++){
      total += dataApi[i].value
    }
    this.setState({
      total : total
    })
  }

  handleClick = () => {
    let o = JSON.parse(JSON.stringify(this.state.dataApi));
    o[0].value = this.state.dataApi[0].value + 1
    this.setState({
      dataApi : o
    })
  }

  render(){
    return(
      <div className="dataStyle">
      {/* <h1>Activités</h1>
        <div className="data">
          <ResponsivePie
            data={this.state.dataApi}
            className="test"
            margin={{ top: 20, right: 30, bottom: 30, left: 30 }}
            innerRadius={0.5}
            borderWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            animate={true}
          />
          <p> Durant les les JO vous avez fait <strong>{this.state.total}</strong> activités</p>
        </div> */}
        <div className="dataTwo">
          <p>Musée . {this.state.dataApi[0].value} visités </p>
          <BarChart 
            data={this.state.dataApi}
            width={this.state.dataApi[0].value * 10}
            height={10}
          />
          <p>Cinéma . {this.state.dataApi[1].value} séances </p>
          <BarChart 
            data={this.state.dataApi}
            width={this.state.dataApi[1].value * 10}
            height={10}
          />
        </div>
        {/* <button onClick={this.handleClick}>Add Me</button> */}
        
      </div>
    )
  }
}

export default Data;