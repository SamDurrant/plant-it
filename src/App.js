import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './util/routes';

// Redux items
import { Provider } from 'react-redux';
import store from './redux/store';

// MUI items
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import themeFile from './util/theme';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

let theme = createMuiTheme(themeFile);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
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
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;