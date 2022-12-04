import * as React from 'react'
import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'

export class SpiderChartView extends React.Component {
  render() {
    const data = [
      {
        data: Object.keys(this.props.data).reduce((pre, cur) => ({...pre, [cur]: Number(this.props.data[cur][0]) / 5}), {}),
        meta: { color: 'blue' }
      },
      {
        data: Object.keys(this.props.data).reduce((pre, cur) => ({...pre, [cur]: Number(this.props.data[cur][1]) / 5}), {}),
        meta: { color: 'red' }
      }
    ]

    const captions = Object.keys(this.props.data).reduce((pre, cur) => ({...pre, [cur]: cur}), {})

    const options = {
      scales: 5,
      captions: true,
      captionMargin: 10,
    }

    return (
      <RadarChart
        captions={captions}
        data={data}
        options={options}
        size={450}
      />
    )
  }
}
