import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../Containers/LandingPage'
import ResultPage from '../Containers/ResultsPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/result' component={ResultPage} />
    </Switch>
  )
}

export default Routes
