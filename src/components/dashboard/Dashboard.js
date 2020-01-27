import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';

// Redux items
import { connect } from 'react-redux';
import { getAllGoals } from '../../redux/actions/goalActions';
import { getCurrentUser } from '../../redux/actions/authActions';

// Components
import GoalList from '../goals/GoalList';
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
    this.props.getAllGoals();
  }
  
  render() {
    const { classes, goals, authenticated } = this.props;

    return (
      authenticated ? (
        <Grid container className={classes.dashboard}>
          <Grid container item sm={12} justify="space-around">
            <Grid item md={6} sm={8} xs={10}>
              <GoalList goals={goals} />
            </Grid>
            <Grid item md={4} sm={2} xs={10}>
              <Notifications />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Redirect to='/login' />
      )
    )
  }
}

const mapActionsToProps = {
  getAllGoals,
  getCurrentUser
}

const mapStateToProps = state => ({
  goals: state.goal.goals,
  authenticated: state.auth.authenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Dashboard));