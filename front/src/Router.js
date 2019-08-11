import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'

// Containers
import Register from './containers/Register'
import Login from './containers/Login'
import Home from './containers/Home'

// Redux
import { Provider as ReduxProvider }  from "react-redux"
import configStore from './modules/store'
const reduxStore = configStore(window.REDUX_INITIAL_DATA)

// Cookies
const cookies = new Cookies()

const Router = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
      render={props => (
      cookies.get('SSID') ? <Component {...props} /> :
      <Redirect to="/login" />
    )} />
  )
}

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
      render={props => (
        <Component {...props} />
      )} 
    />
  )
}

export default Router