import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Sidebar from './Sidebar'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
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

interface LayoutWrapperProps {
  children: JSX.Element
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const classes = useStyles()
  const [openSidebar, setOpenSidebar] = React.useState(false)

  function onClose() {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className={classes.root}>
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
