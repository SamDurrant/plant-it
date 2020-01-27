import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

// Redux items
import { connect } from 'react-redux';

// MUI items
import Button from '@material-ui/core/Button';
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
  return (
    goal ? (
      <Grid 
        container justify="center" 
        className={classes.details}>
        <Grid item sm={10} xs={10}>
          <Card className={classes.goalDetailsCard}>
            <CardContent>
              <Typography 
                variant="h4" 
                className={classes.capsHeading}>
                  {goal.title}
              </Typography>
              <Typography variant="body1">{goal.content}</Typography>
              <hr className={classes.boldRuler} />
              <Typography variant="body1">Posted by {goal.authorFirstName} {goal.authorLastName}</Typography>
              <Typography variant="body2" color="inherit">3rd January, 2am</Typography>
            </CardContent>
            <Button 
              color="primary">
              <Link 
                to='/'
                className={classes.navLink}>Home</Link>
            </Button>
          </Card>
        </Grid>
      </Grid>
    ) : (
      <Grid container justify="center" className={classes.details}>
        <Grid item sm={10} xs={10}>
          <Card className={classes.goalDetailsCard}>
            <CardContent>
              <Typography 
                variant="h4" 
                className={classes.capsHeading}>
                  Oops! We couldn't find your goal!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  )
}

const mapStateToProps = (state, currProps) => {
  let id = currProps.match.params.id; // matches params id in url
  let currentGoal = state.goal.goals.find(goal => goal.goalId === id);
  
  return {
    goal: currentGoal
  }
}

export default connect(mapStateToProps)(withStyles(styles)(GoalDetails));