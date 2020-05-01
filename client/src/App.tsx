import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import './App.css'

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default App
