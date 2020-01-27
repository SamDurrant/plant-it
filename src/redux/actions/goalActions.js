import {
  CREATE_GOAL,
  CREATE_GOAL_ERROR,
  LOADING_DATA,
  SET_GOALS
} from '../types';
import db from '../../config/fbConfig';

export const createGoal = goal => dispatch => {
  dispatch({ type: LOADING_DATA });
  const newGoal = {
    ...goal,
    authorId: 12345,
    authorFirstName: 'Sam',
    authorLastName: 'Durrant',
    createdAt: new Date().toISOString()
  }
  db
    .collection('goals')
    .add(newGoal)
  .then(res => {
    const addedGoal = newGoal;
    addedGoal.goalId = res.id;
    dispatch({
      type: CREATE_GOAL,
      payload: addedGoal
    })
  })
  .catch(err => {

    dispatch({ type: CREATE_GOAL_ERROR, payload: err})
  })
}

export const getAllGoals = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  db
    .collection('goals')
    .orderBy('timeSpan', 'asc')
    .get()
  .then(querySnapshot => {
    let goals = [];
    querySnapshot.forEach(doc => {
      goals.push({
        goalId: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        goalType: doc.data().goalType,
        timeSpan: doc.data().timeSpan,
        authorId: doc.data().authorId,
        authorFirstName: doc.data().authorFirstName,
        authorLastName: doc.data().authorLastName,
        createdAt: doc.data().createdAt
      });
    })

    dispatch({
      type: SET_GOALS,
      payload: goals
    })
  })

}