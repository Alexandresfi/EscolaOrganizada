import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Container } from './styles'

export function ClassCards({ year, schoolClass, link }) {
  return (
    <>
      {schoolClass?.map((item, index) => (
        <Container key={index}>
          <Link to={link}>
            <p> {year} </p>
            <p> {item} </p>
          </Link>
        </Container>
      ))}
    </>
  )
}

ClassCards.propTypes = {
  year: PropTypes.string,
  schoolClass: PropTypes.array,
  link: PropTypes.string
}
