import React from 'react'
import clsx from 'clsx'
import { Drawer, Tooltip, makeStyles, Theme } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import RouterLink from 'next/link'
import Link from '@material-ui/core/Link'
import { useTheme, Divider } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import dynamic from 'next/dynamic'

const Dashboard = dynamic(() => import('@material-ui/icons/Dashboard'))
const ShowChart = dynamic(() => import('@material-ui/icons/ShowChart'))
const Settings = dynamic(() => import('@material-ui/icons/Settings'))
const ChevronLeftIcon = dynamic(() => import('@material-ui/icons/ChevronLeft'))
const ChevronRightIcon = dynamic(() =>
  import('@material-ui/icons/ChevronRight')
)

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

export interface SidebarProps {
  open: boolean
  onClose: () => void
  drawerWidth: number
}

function Sidebar(props: SidebarProps) {
  const { onClose, open } = props
  const classes = useStyles(props)
  const theme = useTheme()

  const routes = [
    { icon: Dashboard, text: 'Dashboard', path: '/' },
    { icon: ShowChart, text: 'Trades', path: '/trades' },
    { icon: Settings, text: 'Admin', path: '/admin' },
  ]

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
        {routes.map(({ icon: ListIcon, text, path }, idx) => {
          return (
            <Link component={RouterLink} href={path} key={idx}>
              <Tooltip title={text} placement="right">
                <ListItem button>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Tooltip>
            </Link>
          )
        })}
      </List>
    </Drawer>
  )
}

export default Sidebar
