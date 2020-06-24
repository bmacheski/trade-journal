import {
  Toolbar,
  makeStyles,
  Theme,
  createStyles,
  Chip,
} from '@material-ui/core'
import React from 'react'
import { getTradeFilters } from '../api/trades'
import { DateTimePicker } from '@material-ui/pickers'
import Dropdown from './Dropdown'
import { Filter } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      margin: 10,
      flexBasis: 400,
    },
    icon: {
      fontSize: '1rem',
    },
    autocompleteInput: {
      flex: 1,
    },
    chip: {
      margin: 3,
    },
    filterTitle: {
      fontSize: 12,
    },
  }),
)

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

  function renderAutocomplete(optionField: string, title: string) {
    return (
      <Dropdown
        buttonName={title}
        selectedItems={selectedFilters}
        menuItems={filters[optionField]}
        onSelect={(val) => onItemSelect(val, optionField)}
      />
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
      renderSelect: () => renderAutocomplete('pair', 'Pair'),
      enabled: true,
    },
    {
      title: 'Pair',
      renderSelect: () => renderAutocomplete('pair', 'Pair'),
      enabled: false,
    },
    {
      title: 'Status',
      renderSelect: () => renderAutocomplete('status', 'Status'),
      enabled: false,
    },
    {
      title: 'Win',
      renderSelect: () => renderAutocomplete('win', 'Win'),
      enabled: true,
    },
    {
      title: 'TP Hit',
      renderSelect: () => renderAutocomplete('tp_hit', 'TP Hit'),
      enabled: true,
    },
    {
      title: 'Side',
      renderSelect: () => renderAutocomplete('side', 'Side'),
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
      renderSelect: () => renderAutocomplete('tp_hit', 'TP Hit'),
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
