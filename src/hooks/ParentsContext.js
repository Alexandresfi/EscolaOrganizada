import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export function ParentProvider({ children }) {
  const [parentsData, setParentsData] = useState([])

  return (
    <UserContext.Provider value={{ parentsData, setParentsData }}>
      {children}
    </UserContext.Provider>
  )
}

export function UseParent() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('ParentUser must be used with UserContext')
  }

  return context
}

ParentProvider.propTypes = {
  children: PropTypes.node
}
