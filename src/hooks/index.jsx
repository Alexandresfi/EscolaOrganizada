import React from 'react'
import PropTypes from 'prop-types'

import { ParentProvider } from './ParentsContext'
import { TeacherProvider } from './TeacherContext'
import { UserProvider } from './UserContext'
import { StudentProvider } from './StudentsContext'

export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <TeacherProvider>
        <ParentProvider>
          <StudentProvider>{children}</StudentProvider>
        </ParentProvider>
      </TeacherProvider>
    </UserProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node
}
