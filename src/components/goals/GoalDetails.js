import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

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
  const { classes } = props;
  const id = props.match.params.id; // matches params id in url

  return (
    <Grid container justify="center" className={classes.details}>
      <Grid item sm={10} xs={10}>
        <Card className={classes.goalDetailsCard}>
          <CardContent>
            <Typography variant="h4" className={classes.capsHeading}>Goal title - {id}</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad reiciendis, nostrum adipisci neque aliquam, facilis labore libero eaque, repellendus consequuntur. Non iste voluptatibus magni.</Typography>
            <hr className={classes.boldRuler} />
            <Typography variant="body1">Posted by The Samantha D</Typography>
            <Typography variant="body2" color="inherit">3rd January, 2am</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(GoalDetails);