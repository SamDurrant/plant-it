import React, { useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import *  as ROUTES from '../../util/routes';

// Context items
import { authContext } from '../../contexts/AuthContext';

// Components
import Notifications from './Notifications';
import MealCard from '../mealCard/MealCard';

// MUI items
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  ...theme.spreadThis,
  dashboard: {
    paddingTop: 125,
    minHeight: '100vh'
  }
})

function Dashboard(props) {
  const { classes } = props;
  const { userAuth } = useContext(authContext);
  const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  return (
    userAuth ? (
      <Grid container className={classes.dashboard}>
        <Grid container item m={10} sm={12} justify="space-around">
          {
            meals && meals.map(meal => {
              return <MealCard key={meal} mealType={meal} />
            })
          }
          <Grid item md={2} sm={10} xs={10}>
            <Notifications />
          </Grid>
        </Grid>
      </Grid>
    ) : (
      <Redirect to={ROUTES.LOGIN} />
    )
  )
}

export default withStyles(styles)(Dashboard);