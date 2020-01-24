import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './util/routes';

// MUI items
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import themeFile from './util/theme';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GoalDetails from './components/goals/GoalDetails';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CreateGoal from './components/goals/CreateGoal';

let theme = createMuiTheme(themeFile);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route 
            exact 
            path={ROUTES.HOME}
            component={Dashboard} />
          <Route 
            path={ROUTES.GOAL} 
            component={GoalDetails} />
          <Route 
            path={ROUTES.LOGIN} 
            component={Login} />
          <Route 
            path={ROUTES.SIGNUP} 
            component={SignUp} />
          <Route 
            path={ROUTES.CREATE} 
            component={CreateGoal} />
        </Switch>
      </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
