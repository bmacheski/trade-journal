import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      margin: 10,
      flexBasis: 400,
    },
    icon: {
      fontSize: '1rem',
    },
    autocompleteInput: {
      flex: 1,
    },
    chip: {
      margin: 3,
    },
  }),
)

export default useStyles
