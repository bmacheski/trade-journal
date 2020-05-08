import { makeStyles, Theme } from '@material-ui/core'
import { SidebarProps } from './Sidebar'

const useStyles = makeStyles((theme: Theme) => {
  return {
    drawer: {
      width: 73,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: (props: SidebarProps) => props.drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 70,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }
})

export default useStyles
