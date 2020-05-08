import React from 'react'
import clsx from 'clsx'
import { Drawer, Tooltip } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { ShowChart, Settings } from '@material-ui/icons'
import { Dashboard } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { ROUTES } from '../../Router'
import { useTheme, Divider } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import useStyles from './Sidebar.styles'

export interface SidebarProps {
  open: boolean
  onClose: () => void
  drawerWidth: number
}

function Sidebar(props: SidebarProps) {
  const { onClose, open } = props
  const classes = useStyles(props)
  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link component={RouterLink} to={ROUTES.DASHBOARD}>
          <Tooltip title="Dashboard" placement="right">
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Tooltip>
        </Link>
        <Link component={RouterLink} to={ROUTES.TRADE_LIST}>
          <Tooltip title="Trades" placement="right">
            <ListItem button>
              <ListItemIcon>
                <ShowChart />
              </ListItemIcon>
              <ListItemText primary="Trades" />
            </ListItem>
          </Tooltip>
        </Link>
        <Link component={RouterLink} to={ROUTES.ADMIN}>
          <Tooltip title="Admin" placement="right">
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem>
          </Tooltip>
        </Link>
      </List>
    </Drawer>
  )
}

export default Sidebar
