import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './util/routes';
import AuthProvider from './contexts/AuthContext';

// MUI items
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import themeFile from './util/theme';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Nutrition from './components/nutrition/Nutrition';

let theme = createMuiTheme(themeFile);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route 
                exact 
                path={ROUTES.HOME} 
                component={Dashboard} />
              <Route path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.SIGNUP} component={SignUp} />
              <Route path={ROUTES.NUTRITION} component={Nutrition} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </MuiThemeProvider>
  );
}

export default App;