import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../Components/Header'

export function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('escolaorganizada:userData')

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <>
      {user && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
