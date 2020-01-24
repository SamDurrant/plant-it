import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI items
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  goalCard: {
    margin: '40px auto',
    padding: 15
  },
  goalTitle: {
    color: theme.palette.secondary.light,
    textDecoration: 'none',
    marginBottom: 15
  }
})

const GoalSummary = props => {
  const { classes, goal } = props;

  return (
    <Card className={classes.goalCard}>
      <CardContent>
        <Typography 
          variant="h4" 
          className={classes.goalTitle}>
          {goal.title}
        </Typography>
        <Typography variant="body1">Posted by Samantha D</Typography>
        <Typography variant="body2" color="textSecondary">3rd January, 6am</Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(GoalSummary);