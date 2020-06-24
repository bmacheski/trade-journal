import {
  Button,
  Checkbox,
  MenuItem,
  Paper,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
} from '@material-ui/core'
import React from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { Filter } from '../types'

interface DropdownProps {
  buttonName: string
  menuItems?: Filter[]
  onSelect: (item: Filter) => void
  selectedItems: Filter[]
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

function Dropdown({
  buttonName,
  menuItems,
  onSelect,
  selectedItems,
}: DropdownProps) {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
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
        variant="contained"
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
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems?.map((item) => {
                    return (
                      <MenuItem onClick={() => onSelect(item)}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          checked={selectedItems.includes(item)}
                        />
                        {item.value}
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default Dropdown
