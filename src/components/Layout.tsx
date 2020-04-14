import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Sidebar from './Sidebar'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  contentWrapper: {
    height: '100%',
    paddingLeft: 240,
  },
  content: {
    padding: '32px',
  },
}))

interface LayoutWrapperProps {
  children: JSX.Element
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Trade Journal
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main className={classes.contentWrapper}>
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  )
}

export default LayoutWrapper
