import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../Containers/Header'

export function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('escolaorganizada:userData')

  if (!user) {
    return <Redirect to="/" />
  }

  if (isAdmin && !JSON.parse(user).type_acess === 'admin') {
    alert('Você não tem permissão')
    return <Redirect to={'/home'} />
  }

  return (
    <>
      {user && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
