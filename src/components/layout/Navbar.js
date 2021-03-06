import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

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
    console.log('logged out')
  }
  const { classes } = props;

  return (
    <AppBar>
      <Toolbar className={classes.navBar}>
        <Link 
          to='/' 
          className={classes.appLogo}>
          <Typography variant="h1" edge="start">Plan(t) It</Typography>
        </Link>

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

export default withStyles(styles)(Navbar);