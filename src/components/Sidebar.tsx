import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Drawer, Theme } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { ShowChart } from '@material-ui/icons'
import { Dashboard } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { ROUTES } from '../Router'

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '10px',
  },
  divider: {
    margin: '10px',
  },
  nav: {
    marginBottom: '10px',
  },
}))

function Sidebar(props) {
  const { open, variant, onClose, className, ...rest } = props
  const classes = useStyles()

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={true}
      variant="permanent"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <List component="nav" aria-label="main mailbox folders">
          <Link component={RouterLink} to={ROUTES.DASHBOARD}>
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link component={RouterLink} to={ROUTES.TRADE_LIST}>
            <ListItem button>
              <ListItemIcon>
                <ShowChart />
              </ListItemIcon>
              <ListItemText primary="Trades" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  )
}

export default Sidebar
