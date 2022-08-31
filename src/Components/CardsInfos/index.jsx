import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { List, Container } from './styles'

export default function CardsInfos({ infoCards }) {
  return (
    <nav>
      <List>
        {infoCards?.map((infoCard, index) => (
          <li key={index}>
            <Link to={infoCard.link}>
              <Container>
                <img src={infoCard.image} alt="imagem" />
                <p>{infoCard.title}</p>
              </Container>
            </Link>
          </li>
        ))}
      </List>
    </nav>
  )
}

CardsInfos.propTypes = {
  infoCards: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
}
