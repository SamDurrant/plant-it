import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

// Redux items
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

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
  const handleLogout = () => {
    props.logoutUser();
  }
  const { classes, authenticated } = props;

  return (
    <AppBar>
      <Toolbar className={classes.navBar}>
        <Link 
          to='/' 
          className={classes.appLogo}>
          <Typography variant="h1" edge="start">Plan(t) It</Typography>
        </Link>

        {authenticated ? (
          <div className={classes.navLinkBox}>
            <Link 
              to='/create'
              className={classes.navLink}>
              <Typography variant="h5" edge="end">New Goal</Typography>
            </Link>
            <Link
              to='/'
              onClick={handleLogout}
              className={classes.navLink}>
              <Typography variant="h5" edge="end">Logout</Typography>
            </Link>
          </div>
          ) : (
          <div className={classes.navLinkBox}>
            <Link 
              to='/signup'
              className={classes.navLink}>
              <Typography variant="h5" edge="end">Sign up</Typography>
            </Link>
            <Link 
              to='/login'
              className={classes.navLink}>
              <Typography variant="h5" edge="end">Login</Typography>
            </Link>
          </div>
          )
        }          
        <Fab 
          variant="round" 
          color="secondary"
          className={classes.userButton}>
          |=|
        </Fab>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapActionsToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Navbar));