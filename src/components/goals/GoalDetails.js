import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// MUI items
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  goalCard: {
    margin: '40px auto',
    padding: 15
  },
  details: {
    paddingTop : 150,
    minHeight: '100vh'
  },
  goalDetailsCard: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText
  }
})

const GoalDetails = props => {
  const { classes, goal } = props;

  if (goal) {
    return (
      <Grid container justify="center" className={classes.details}>
        <Grid item sm={10} xs={10}>
          <Card className={classes.goalDetailsCard}>
            <CardContent>
              <Typography variant="h4" className={classes.capsHeading}>
                {goal.title}
              </Typography>
              <Typography variant="body1">
                {goal.content}
              </Typography>
              <hr className={classes.boldRuler} />
              <Typography variant="body1">
                Posted by {goal.authorFirstName} {goal.authorLastName}
              </Typography>
              <Typography variant="body2" color="inherit">3rd January, 2am</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container justify="center" className={classes.details}>
        <Grid item sm={10} xs={10}>
          <Card className={classes.goalDetailsCard}>
            <CardContent>
              <Typography variant="h4" className={classes.capsHeading}>
                Loading goal...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.location.pathname.split('/')[2];
  const goals = state.firestore.data.goals;
  const goal = goals ? goals[id] : null; 
  return {
    goal: goal
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'goals' }
  ])
)(withStyles(styles)(GoalDetails));