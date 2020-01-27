import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import *  as ROUTES from '../../util/routes';

// Redux items
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/actions/authActions';

// Components
import Notifications from './Notifications';

// MUI items
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  ...theme.spreadThis,
  dashboard: {
    paddingTop: 125,
    minHeight: '100vh'
  }
})

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  
  render() {
    const { classes, authenticated } = this.props;

    return (
      authenticated ? (
        <Grid container className={classes.dashboard}>
          <Grid container item sm={12} justify="space-around">
            <Grid item md={6} sm={8} xs={10}>
              LIST ONE
            </Grid>
            <Grid item md={4} sm={2} xs={10}>
              <Notifications />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Redirect to={ROUTES.LOGIN} />
      )
    )
  }
}

const mapActionsToProps = {
  getCurrentUser
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Dashboard));