import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
})

interface RangeSliderProps {
  min: number
  max: number
  title?: string
  onValueChange: (vals: number[]) => void
}

export default function RangeSlider({
  min,
  max,
  title,
  onValueChange,
}: RangeSliderProps) {
  const classes = useStyles()

  function handleChange(event: any, newValue: number | number[]) {
    onValueChange(newValue as number[])
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {title}
      </Typography>
      <Slider
        value={[min, max]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  )
}
