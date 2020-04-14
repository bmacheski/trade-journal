import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import ReactApexChart from 'react-apexcharts'

function EquityGraph() {
  const options = {
    series: [
      {
        name: 'Holdings',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Equity Graph',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
  }

  return (
    <Card>
      <CardContent>
        <ReactApexChart
          options={options}
          series={options.series}
          type="line"
          height={350}
        />
      </CardContent>
    </Card>
  )
}

export default EquityGraph
