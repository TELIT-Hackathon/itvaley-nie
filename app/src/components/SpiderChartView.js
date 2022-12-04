import * as React from 'react'
import { Radar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export class SpiderChartView extends React.Component {
  render() {
    return (
      <Radar data={{
        // options: {
        //   responsive: true,
        //   scale: {
        //     ticks: {
        //       beginAtZero: true,
        //       max: 25,
        //       min: 0
        //     }
        //   }
        // },

        labels: ['JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'React'],
        datasets: [
          {
            label: 'Yours',
            data: [2, 1, 3, 5, 2],
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
          },
          {
            label: 'Wanted',
            data: [2, 3, 3, 5, 2],
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1,
          },
        ],
      }} />
    );
  }
}
