import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    card: {
      minHeight: 100,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      fontSize: 20,
    },
    long: {
      color: 'green',
    },
    short: {
      color: 'red',
    },
  })
})

export default useStyles
