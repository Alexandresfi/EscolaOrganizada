import React from 'react'

import PropTypes from 'prop-types'

import { ContainerButton } from './styles'

function ButtonBack({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>
}

export default ButtonBack

ButtonBack.propTypes = {
  children: PropTypes.string
}
