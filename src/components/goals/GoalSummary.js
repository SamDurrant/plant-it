import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import flow from '../../images/flow.svg';
import fresh from '../../images/fresh.svg';
import green from '../../images/green.svg';
import love from '../../images/love.svg';
import peace from '../../images/peace.svg';

// MUI items
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  goalCard: {
    margin: '40px auto',
    padding: 15,
    display: 'flex',
    alignItems: 'center'
  },
  goalTitle: {
    color: theme.palette.secondary.light,
    textDecoration: 'none',
    marginBottom: 15
  },
  goalContent: {
    flex: '1 1 auto',
    backgroundColor: '#eee'
  },
  goalTypeImage: {
    flex: '1 0 auto',
    padding: 15,
    width: 150,
    height: 150,
    objectFit: 'contain'
  }
})

const goalTypes = [
  {
    value: 'flow',
    src: flow,
    color: '#f48e8c'
  },
  {
    value: 'fresh',
    src: fresh,
    color: '#f1726f'
  },
  {
    value: 'green',
    src: green,
    color: '#b75d5c'
  },
  {
    value: 'love',
    src: love,
    color: '#664eb1'
  },
  {
    value: 'peace',
    src: peace,
    color: '#55448a'
  }
]

const GoalSummary = props => {
  const { classes, goal } = props;
  const src = goalTypes.find(goalType => goalType.value === goal.goalType);

  return (
    <Card className={classes.goalCard} style={{backgroundColor: src.color }}>
      <CardContent
        className={classes.goalContent}>
        <Typography variant="h4" className={classes.goalTitle} component={Link} to={`/goal/${goal.goalId}`}>{goal.title}</Typography>
        <Typography variant="body1">Posted by {goal.authorFirstName} {goal.authorLastName}</Typography>
        <Typography variant="body1">{goal.content}</Typography>
        <Typography variant="body2" color="textSecondary">3rd January, 6am</Typography>
      </CardContent>
      <CardMedia
        className={classes.goalTypeImage}
        component="img"
        title={src.value}
        image={src.src}/>
    </Card>
  )
}

export default withStyles(styles)(GoalSummary);