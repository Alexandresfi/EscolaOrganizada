import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { CardHome } from '../Card'
import { List, Container } from './styles'

export default function CardsInfos({ infoCards, home }) {
  return (
    <nav>
      <List>
        {infoCards?.map((infoCard, index) => (
          <li key={index}>
            <Link to={infoCard.link}>
              {home && (
                <CardHome image={infoCard.image} title={infoCard.title} />
              )}

              {!home && (
                <Container>
                  <img src={infoCard.image} alt="imagem" />
                  <p>{infoCard.title}</p>
                </Container>
              )}
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
  ),
  home: PropTypes.bool
}
