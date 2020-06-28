import {
  Toolbar,
  makeStyles,
  createStyles,
  Chip,
  MenuList,
  MenuItem,
  Checkbox,
  Slider,
} from '@material-ui/core'
import React from 'react'
import { getTradeFilters } from '../api/trades'
import { DateTimePicker } from '@material-ui/pickers'
import Dropdown from './Dropdown'
import { Filter } from '../types'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import RangeSlider from './RangeSlider'

const useStyles = makeStyles(() =>
  createStyles({
    filterTitle: {
      fontSize: 12,
    },
  }),
)

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

interface TradeTableToolbarProps {
  onItemSelect: (a, b) => void
  selectedFilters: Filter[]
  onChipClick: (chipIndex: number) => void
}

function TradeTableToolbar({
  onItemSelect,
  selectedFilters,
  onChipClick,
}: TradeTableToolbarProps) {
  const classes = useStyles()
  const [filters, setFilters] = React.useState<Filter[]>([])

  function renderAutocompleteList(optionField: string, title: string) {
    return (
      <Dropdown buttonName={title}>
        {({ open, handleListKeyDown }) => {
          return (
            <MenuList
              autoFocusItem={open}
              id="menu-list-grow"
              onKeyDown={handleListKeyDown}
            >
              {filters[optionField]?.map((item) => {
                return (
                  <MenuItem onClick={() => onItemSelect(item, optionField)}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      checked={selectedFilters.includes(item)}
                    />
                    {item.value}
                  </MenuItem>
                )
              })}
            </MenuList>
          )
        }}
      </Dropdown>
    )
  }

  function renderSlider(title: string) {
    return (
      <Dropdown buttonName="Slider">
        {() => (
          <RangeSlider
            title={title}
            min={0}
            max={10}
            onValueChange={() => console.log('slider onValueChange')}
          />
        )}
      </Dropdown>
    )
  }

  React.useEffect(() => {
    getTradeFilters().then((res) => setFilters(res))
  }, [])

  const inputProps = {
    fullWidth: true,
    margin: 'dense' as any,
    InputLabelProps: {
      shrink: true,
    },
  }
  // `enabled` is temp field until all filter components / backend is completed
  const filterData = [
    {
      title: 'Pair',
      renderSelect: () => renderAutocompleteList('pair', 'Pair'),
      enabled: true,
    },
    {
      title: 'Pair',
      renderSelect: () => renderAutocompleteList('pair', 'Pair'),
      enabled: false,
    },
    {
      title: 'Status',
      renderSelect: () => renderAutocompleteList('status', 'Status'),
      enabled: false,
    },
    {
      title: 'Win',
      renderSelect: () => renderAutocompleteList('win', 'Win'),
      enabled: true,
    },
    {
      title: 'TP Hit',
      renderSelect: () => renderAutocompleteList('tp_hit', 'TP Hit'),
      enabled: true,
    },
    {
      title: 'Side',
      renderSelect: () => renderAutocompleteList('side', 'Side'),
      enabled: true,
    },
    {
      renderSelect: () => (
        <>
          <span className={classes.filterTitle}>Date From:</span>
          <DateTimePicker
            name="entry_date"
            value={null}
            onChange={(val) => {}}
            {...inputProps}
          />
          <span className={classes.filterTitle}>To:</span>
          <DateTimePicker
            name="entry_date"
            value={null}
            onChange={(val) => {}}
            {...inputProps}
          />
        </>
      ),
      enabled: false,
    },
    {
      title: 'TP Hit',
      renderSelect: () => renderAutocompleteList('tp_hit', 'TP Hit'),
    },
  ]

  return (
    <Toolbar>
      {filterData.filter((f) => f.enabled).map((f) => f.renderSelect())}
      {selectedFilters.map((f, idx) => (
        <Chip
          label={`${f.name}: ${f.value}`}
          style={{ marginLeft: 5, marginRight: 5 }}
          onDelete={() => onChipClick(idx)}
        />
      ))}
    </Toolbar>
  )
}

export default TradeTableToolbar
