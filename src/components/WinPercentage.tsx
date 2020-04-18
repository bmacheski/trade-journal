import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import ReactApexChart from 'react-apexcharts'
import { makeStyles } from '@material-ui/styles'

interface WinPercentageProps {
  winCount: number
  totalCount: number
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    position: 'relative',
    height: '300px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
  },
  device: {
    textAlign: 'center',
    padding: '0 8px 8px 0',
  },
  deviceIcon: {
    color: '#546e7a',
  },
}))

function WinPercentage({ winCount, totalCount }: WinPercentageProps) {
  const classes = useStyles()

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

  const stats = [
    {
      title: 'Winners',
      value: winCount ? winCount : 0,
      color: 'green',
    },
    {
      title: 'Losers',
      value: 2,
      color: 'red',
    },
  ]

  return (
    <Card>
      <CardContent>
        <div>
          <ReactApexChart
            options={config}
            series={config.series}
            type="radialBar"
          />
        </div>
        <div className={classes.stats}>
          {stats.map((device) => (
            <div className={classes.device} key={device.title}>
              <Typography variant="body1">{device.title}</Typography>
              <Typography style={{ color: device.color }} variant="h4">
                {device.value}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default WinPercentage
