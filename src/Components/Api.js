import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import BarChart from 'react-bar-chart';

export default class Api extends React.Component{
  constructor(){
    super();
    this.state = {
      dataApi : {
        ref1 : [
          {
            name : 'Musée',
            id: "Musée",
            value : 10,
            label: "Musée",
            color : "green"
          }
        ],
        ref2 : [
          {
            name : 'Cinéma',
            id: "Cinéma",
            value : 15,
            label : "Cinéma",
            color: "red"
          }
        ],
        ref3 : [
          {
            name : 'Monument',
            id: "Monument",
            value : 5,
            label : "Monument",
            color : "yellow"
          }
        ]
      }
    }
  }
  componentDidMount(){
    this.getArray()
  }

  getArray = () => {
    const result = this.state.dataApi;
    result.map((api) => {
      return 
    })

    console.log(result)

    
  }



  render(){

    return (
      <div>
        <div>
          <ResponsivePie 
            data={[...this.state.dataApi]}
            className="test"
            margin={{ top: 20, right: 30, bottom: 30, left: 30 }}
            innerRadius={0.5}
            borderWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            animate={true}
          />
        </div>
      </div>
    )
  }
}