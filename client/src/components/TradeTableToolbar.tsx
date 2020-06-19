import {
  Toolbar,
  IconButton,
  Button,
  TextField,
  Chip,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import React from 'react'
import FilterListIcon from '@material-ui/icons/FilterList'
import CloseIcon from '@material-ui/icons/Close'
import Autocomplete from '@material-ui/lab/Autocomplete'
import get from 'lodash/get'
import DoneIcon from '@material-ui/icons/Done'

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
  }),
)

interface TradeTableToolbarProps {
  hideFilter: boolean
  columns: any[]
  data: any[]
}

function TradeTableToolbar({ hideFilter, ...props }: TradeTableToolbarProps) {
  const classes = useStyles()
  const [showOption, setShowOption] = React.useState<boolean>(false)
  const [currentEditOption, setCurrentEditOption] = React.useState<any>(null)
  const [currentEditOptionValues, setCurrentEditOptionValues] = React.useState<
    string[]
  >([])
  const [currentEditOptionValue, setCurrentEditOptionValue] = React.useState<
    any
  >(null)

  const [filters, setFilters] = React.useState<{
    [key: string]: { option: string; value: any; values: any[] }
  } | null>(null)

  const fields = props.columns.map((col, index) => ({
    title: col.title || '',
    field: col.field,
    colIndex: index,
    data: props.data.map((d) => get(d, `${col.field}`)),
  }))

  function onAddFilterClick() {
    setShowOption(true)
  }

  React.useEffect(() => {
    console.log('chips changed', filters)
  }, [filters])

  return (
    <Toolbar>
      <Button variant="contained" color="primary" onClick={onAddFilterClick}>
        <FilterListIcon />
        Add Filter
      </Button>
      {Object.keys(filters || {}).map((key) => {
        return (
          <Chip
            label={`${filters ? filters[key]?.option : ''}: ${
              filters ? filters[key]?.value : ''
            }`}
            className={classes.chip}
            onDelete={() =>
              setFilters((currFilters) => {
                if (!currFilters) return currFilters
                const filtersCopy = Object.assign({}, currFilters)
                delete filtersCopy[key]
                return filtersCopy
              })
            }
          />
        )
      })}
      {showOption && (
        <div className={classes.container}>
          <Autocomplete
            id="autocomplete-option-value"
            options={fields}
            size="small"
            getOptionLabel={(option) => option.title || ''}
            style={{ marginRight: 5 }}
            className={classes.autocompleteInput}
            onChange={(_, val) => {
              if (!val?.title) return
              setCurrentEditOption(val.title)
              setCurrentEditOptionValues(val.data)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Column Name"
                variant="standard"
              />
            )}
          />
          <Autocomplete
            id="autocomplete-option-values"
            options={currentEditOptionValues}
            size="small"
            getOptionLabel={(option: string) => String(option) || ''}
            value={currentEditOptionValue}
            onChange={(_, val) => setCurrentEditOptionValue(val)}
            className={classes.autocompleteInput}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Column Value"
                variant="standard"
              />
            )}
          />
          <IconButton
            onClick={() =>
              setFilters((prevVals) => {
                return Object.assign({}, prevVals || {}, {
                  [currentEditOption]: {
                    option: currentEditOption,
                    value: null,
                    values: currentEditOptionValues,
                  },
                })
              })
            }
          >
            <DoneIcon className={classes.icon}></DoneIcon>
          </IconButton>
          <IconButton onClick={() => setShowOption(false)}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
      )}
    </Toolbar>
  )
}

export default TradeTableToolbar
