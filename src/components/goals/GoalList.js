import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import GoalSummary from './GoalSummary';
import * as ROUTES from '../../util/routes';

const styles = (theme) => ({
  ...theme.spreadThis
})

const GoalList = (props) => {
  const { classes, goals } = props;
  return (
    <div>
      { goals && goals.map(goal => {
        return (
          <Link 
            to={ROUTES.GOAL + goal.id} 
            key={goal.id}
            className={classes.cardLink}>
            <GoalSummary goal={goal} />
          </Link>
        )
      }) }
    </div>
  )
}

export default withStyles(styles)(GoalList);