import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import ReactApexChart from 'react-apexcharts'

interface WinPercentageProps {
  metrics: any
}

function WinPercentage({ metrics }: WinPercentageProps) {
  const [config, setConfig] = React.useState({
    labels: ['Wins'],
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
      setConfig(Object.assign({}, metrics, data))
    }
  }, [metrics])

  return (
    <Card>
      <CardContent>
        <ReactApexChart
          options={config}
          series={config.series}
          type="radialBar"
        />
      </CardContent>
    </Card>
  )
}

export default WinPercentage
