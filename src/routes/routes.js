import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home } from '../Components/Home'
import { Login } from '../Components/Login'
import { CardNotas } from '../Components/Notas'
import { Education1 } from '../Components/Notas/Pages/Education_1'
import { Education2 } from '../Components/Notas/Pages/Education_2'
import { Education3 } from '../Components/Notas/Pages/Education_3'
import { TablesNotas } from '../Components/Notas/Pages/Table'
import { RegistrationParents } from '../Components/Responsibles'
import { ContainerTeachers } from '../Components/TeacherManagement'
import { Teacher } from '../Components/TeacherManagement/ManageTeacher/CreateDelete'
import { ContainerUpdateTeacher } from '../Components/TeacherManagement/ManageTeacher/Update'
import { PrivateRoute } from './private-route'

export function Rotas() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <PrivateRoute component={Home} exact path="/home" />

        <PrivateRoute exact path="/teacher" component={ContainerTeachers} />

        <PrivateRoute exact path="/teacher/create" component={Teacher} />

        <PrivateRoute
          exact
          path="/teacher/update"
          component={ContainerUpdateTeacher}
        />

        <PrivateRoute exact path="/parentes" component={RegistrationParents} />

        <PrivateRoute exact path="/grades" component={CardNotas} />

        <PrivateRoute exact path="/education-1" component={Education1} />

        <PrivateRoute exact path="/education-2" component={Education2} />

        <PrivateRoute exact path="/education-3" component={Education3} />

        <PrivateRoute exact path="/frist-year" component={TablesNotas} />
      </Switch>
    </Router>
  )
}
