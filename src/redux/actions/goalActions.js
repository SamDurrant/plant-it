import {
  CREATE_GOAL,
  CREATE_PROJECT_ERROR
} from '../types';

export const createGoal = goal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore(); // gives reference to database
    firestore.collection('goals').add({
      ...goal,
      authorFirstName: 'Sam',
      authorLastName: 'Durrant',
      authorId: 10987654321,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: CREATE_GOAL, goal });
    })
    .catch(err => {
      dispatch({ type: CREATE_PROJECT_ERROR, err});
    })
  }
}