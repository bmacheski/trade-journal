import { AppProps } from 'next/app'
import React from 'react'
import '../styles/global.css'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Router from 'next/router'
import { SWRConfig } from 'swr'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const fetcher = (...args) => fetch(args as any).then((res) => res.json())

function App({ Component, pageProps }: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default App
