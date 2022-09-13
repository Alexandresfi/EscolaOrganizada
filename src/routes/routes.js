import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { CardNotas } from '../Components/Notas'
import { Education1 } from '../Components/Notas/Pages/Education_1'
import { Education2 } from '../Components/Notas/Pages/Education_2'
import { Education3 } from '../Components/Notas/Pages/Education_3'
import { ContainerNotas } from '../Components/Notas/Pages/Table'
import { TablePerClass } from '../Components/Notas/Pages/Table/PerClass'
import { TablePerQuarter } from '../Components/Notas/Pages/Table/PerQuarter'
import { TablePerStudent } from '../Components/Notas/Pages/Table/PerStudent'
import { ContainerResponsible } from '../Components/Responsibles'
import { Parent } from '../Components/Responsibles/ManageResponsibles/CreateDelete'
import { UpdateData } from '../Components/Responsibles/ManageResponsibles/Update'
import { ContainerTeachers } from '../Components/TeacherManagement'
import { Teacher } from '../Components/TeacherManagement/ManageTeacher/CreateDelete'
import { ContainerUpdateTeacher } from '../Components/TeacherManagement/ManageTeacher/Update'
import { Home } from '../Containers/Home'
import { Login } from '../Containers/Login'
import { PrivateRoute } from './private-route'

export function Rotas() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <PrivateRoute component={Home} exact path="/home" />

        <PrivateRoute
          exact
          path="/teacher"
          component={ContainerTeachers}
          isAdmin
        />

        <PrivateRoute
          exact
          path="/teacher/create"
          component={Teacher}
          isAdmin
        />

        <PrivateRoute
          exact
          path="/teacher/update"
          component={ContainerUpdateTeacher}
          isAdmin
        />

        <PrivateRoute
          exact
          path="/parentes"
          component={ContainerResponsible}
          isAdmin
        />

        <PrivateRoute exact path="/parent/create" component={Parent} isAdmin />

        <PrivateRoute
          exact
          path="/parent/update"
          component={UpdateData}
          isAdmin
        />

        <PrivateRoute exact path="/grades" component={CardNotas} />

        <PrivateRoute exact path="/education-1" component={Education1} />

        <PrivateRoute exact path="/education-2" component={Education2} />

        <PrivateRoute exact path="/education-3" component={Education3} />

        <PrivateRoute exact path="/frist-year" component={ContainerNotas} />

        <PrivateRoute exact path="/grades/class" component={TablePerClass} />

        <PrivateRoute
          exact
          path="/grades/quarter"
          component={TablePerQuarter}
        />

        <PrivateRoute
          exact
          path="/grades/student"
          component={TablePerStudent}
        />
      </Switch>
    </Router>
  )
}
