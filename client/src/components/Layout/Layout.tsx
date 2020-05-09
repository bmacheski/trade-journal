import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Sidebar from '../Sidebar/Sidebar'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './Layout.styles'

const drawerWidth = 240

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
