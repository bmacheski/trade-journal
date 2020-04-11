import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import ReactApexChart from 'react-apexcharts'

function WinPercentage({ metrics }) {
  const [options, setOptions] = React.useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
        },
      },
      labels: ['Wins'],
    },
  })

  React.useEffect(() => {
    if (metrics && metrics.count) {
      const data = {
        series: [
          metrics.count > 0
            ? ((metrics.wins / metrics.count) * 100).toFixed(2)
            : 0,
        ],
      }
      setOptions(Object.assign({}, metrics, data))
    }
  }, [metrics])

  return (
    <Card>
      <CardContent>
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={350}
        />
      </CardContent>
    </Card>
  )
}

export default WinPercentage
