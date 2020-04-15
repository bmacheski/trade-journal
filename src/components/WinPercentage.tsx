import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import ReactApexChart from 'react-apexcharts'

interface WinPercentageProps {
  winCount: number
  totalCount: number
}

function WinPercentage({ winCount, totalCount }: WinPercentageProps) {
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
    if (winCount && totalCount) {
      const data = {
        series: [
          totalCount > 0 ? ((winCount / totalCount) * 100).toFixed(2) : 0,
        ],
      }
      setConfig(Object.assign({}, config, data))
    }
  }, [winCount, totalCount])

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
