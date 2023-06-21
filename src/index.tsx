import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import './assets/css/App.css'
import AdminLayout from './layouts/admin'
import theme from './theme/theme'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <HashRouter>
        <Switch>
          <Route path={`/admin`} component={AdminLayout} />
          <Redirect from="/" to="/admin" />
        </Switch>
      </HashRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
)
