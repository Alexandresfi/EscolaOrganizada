import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'

export function Content({ children }) {
  return <Container>{children}</Container>
}

Content.propTypes = {
  children: PropTypes.element
}
