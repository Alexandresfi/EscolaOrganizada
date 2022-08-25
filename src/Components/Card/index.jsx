import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'

export function CardHome({ image, title }) {
  return (
    <Container>
      <img src={image} alt="imagem" />
      <p>{title}</p>
    </Container>
  )
}

CardHome.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}
