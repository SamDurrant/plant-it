import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import * as ROUTES from '../../util/routes';
import { authContext } from '../../contexts/AuthContext';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 75
  },
  navLinkBox: {
    display: 'flex',
    textTransform: 'uppercase'
  },
  appLogo: {
    flex: 1,
    textDecoration: 'none',
    color: theme.palette.secondary.main
  },
  userButton: {
    marginLeft: 20
  }
})

function Navbar(props) {
  const { classes } = props;
  const { userAuth, signOut } = useContext(authContext);

  const handleLogout = () => {
    signOut();
  }

  return (
    <AppBar>
      <Toolbar className={classes.navBar}>
        <Link 
          to={ROUTES.HOME}
          className={classes.appLogo}>
          <Typography variant="h1" edge="start">Macro</Typography>
        </Link>
          {userAuth ? (
            <div className={classes.navLinkBox}>
              <Link 
                to={ROUTES.NUTRITION}
                className={classes.navLink}>
                <Typography variant="h5" edge="end">Nutrition</Typography>
              </Link>
              <Link
                to={ROUTES.HOME}
                onClick={handleLogout}
                className={classes.navLink}>
                <Typography variant="h5" edge="end">Logout</Typography>
              </Link>
            </div>
          ) : (
            <div className={classes.navLinkBox}>
              <Link 
                to={ROUTES.SIGNUP}
                className={classes.navLink}>
                <Typography variant="h5" edge="end">Sign up</Typography>
              </Link>
              <Link 
                to={ROUTES.LOGIN}
                className={classes.navLink}>
                <Typography variant="h5" edge="end">Login</Typography>
              </Link>
            </div>
          )}
        <Fab 
          variant="round" 
          color="secondary"
          className={classes.userButton}>
            macro
        </Fab>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navbar);