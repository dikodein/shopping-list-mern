import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Containers
import Register from './containers/Register'
import Login from './containers/Login'
import Home from './containers/Home'

// Cookies
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
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