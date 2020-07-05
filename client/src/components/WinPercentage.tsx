import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

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

interface WinPercentageProps {
  winCount: number
  lossCount: number
  totalCount: number
  height: number
}

function WinPercentage({
  winCount,
  lossCount,
  totalCount,
  height,
}: WinPercentageProps) {
  const classes = useStyles()
  const [config, setConfig] = React.useState({
    labels: ['Win Rate'],
    series: [],
    options: {
      chart: {
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
      setConfig(
        Object.assign({}, config, {
          series: [
            totalCount > 0 ? ((winCount / totalCount) * 100).toFixed(2) : 0,
          ],
        })
      )
    }
  }, [winCount, totalCount])

  const stats = [
    {
      title: 'Winners',
      value: winCount || 0,
      color: 'green',
    },
    {
      title: 'Losers',
      value: lossCount || 0,
      color: 'red',
    },
  ]

  return (
    <Card elevation={0}>
      <CardContent>
        <ReactApexChart
          options={config}
          height={height}
          series={config.series}
          type="radialBar"
        />
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
