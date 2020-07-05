import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Sidebar from './Sidebar'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, Theme } from '@material-ui/core'

const drawerWidth = 200

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
    color: '#263238',
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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(5),
  },
}))

interface LayoutWrapperProps {
  children: React.ReactNode
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const classes = useStyles({
    drawerWidth,
  })
  const [openSidebar, setOpenSidebar] = React.useState(false)

  function onClose() {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className={classes.root} id="root">
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openSidebar,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onClose}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openSidebar,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Trade Journal
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar drawerWidth={drawerWidth} open={openSidebar} onClose={onClose} />
      <main className={classes.content}>
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  )
}

export default LayoutWrapper
