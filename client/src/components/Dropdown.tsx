import {
  Button,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
} from '@material-ui/core'
import React from 'react'

interface DropdownProps {
  buttonName: string
  children: ({
    open,
    handleListKeyDown,
  }: {
    open: boolean
    handleListKeyDown: any
  }) => JSX.Element
}

function Dropdown({ buttonName, children }: DropdownProps) {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen)
  }

  function handleClose(event: React.MouseEvent<EventTarget>) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <div style={{ marginRight: 5, marginLeft: 5 }}>
      <Button
        variant="outlined"
        color="primary"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ fontSize: 12, border: '1px solid black' }}
      >
        {buttonName}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        style={{ zIndex: 11 }}
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                {children({ open, handleListKeyDown })}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default Dropdown
