import { makeStyles } from '@material-ui/styles'

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

export default useStyles
