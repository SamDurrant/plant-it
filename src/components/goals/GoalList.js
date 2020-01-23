import React from 'react';
import GoalSummary from './GoalSummary';

const GoalList = ({goals}) => {
  return (
    <div>
      { goals && goals.map(goal => {
        return (
          <GoalSummary goal={goal} key={goal.id} />
        )
      }) }
    </div>
  )
}

export default GoalList;