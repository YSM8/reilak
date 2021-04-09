import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { DashbordRoutes } from './DashbordRoutes'

export const AppRouter = () => {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/" component={DashbordRoutes} />
          </Switch>
        </div>
      </Router>
    )
}
