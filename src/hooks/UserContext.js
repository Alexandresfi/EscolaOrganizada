import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem(
      'escolaorganizada:userData',
      JSON.stringify(userInfo)
    )
  }

  const loadUserData = async () => {
    const clientInfo = await localStorage.getItem('escolaorganizada:userData')

    if (clientInfo) {
      setUserData(JSON.parse(clientInfo))
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
