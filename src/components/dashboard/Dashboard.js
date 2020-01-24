import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
  render() {
    const { classes, goals } = this.props;

    return (
      <Grid container className={classes.dashboard}>
        <Grid container item sm={12} justify="space-around">
          <Grid item sm={4} xs={10}>
            <GoalList goals={goals} />
          </Grid>
          <Grid item sm={4} xs={10}>
            <Notifications />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  goals: state.firestore.ordered.goals
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'goals'}
  ])
)(withStyles(styles)(Dashboard));