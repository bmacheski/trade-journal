import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: (props: any) => props.drawerWidth,
    width: (props: any) => `calc(100% - ${props.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(6),
  },
}))

export default useStyles
