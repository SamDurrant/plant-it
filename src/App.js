import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Redux items
import { Provider } from 'react-redux';
import store from './redux/store';

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
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route 
                exact 
                path='/' 
                component={Dashboard} />
              <Route 
                path='/goal/:id' 
                component={GoalDetails} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route 
                path='/create' 
                component={CreateGoal} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;