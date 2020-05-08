import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    card: {
      marginTop: 10,
    },
    screenshot: {
      maxHeight: '70vh',
    },
    message: {
      padding: theme.spacing(2),
    },
    messageContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(1),
    },
  })
})

export default useStyles
