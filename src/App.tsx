import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
