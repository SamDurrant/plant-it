import React, { useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import *  as ROUTES from '../../util/routes';

import { authContext } from '../../contexts/AuthContext';

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

function Dashboard(props) {
  const { classes } = props;
  const { userAuth } = useContext(authContext);

  return (
    userAuth ? (
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

export default withStyles(styles)(Dashboard);