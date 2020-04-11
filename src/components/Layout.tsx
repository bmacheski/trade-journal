import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Sidebar from './Sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
    paddingLeft: 240,
  },
}))

function LayoutWrapper(props: { children: JSX.Element }) {
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
      <main className={classes.content}>
        <div style={{ padding: '32px' }}>{props.children}</div>
      </main>
    </div>
  )
}

export default LayoutWrapper
