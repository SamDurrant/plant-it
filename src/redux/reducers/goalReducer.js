import {
  CREATE_GOAL, 
  CREATE_PROJECT_ERROR
} from '../types';

const initialState = {
  goals: [
    {id: '1', title: '1 year goal', content: 'I will be super fit and trim with a hot, hot bod'},
    {id: '2', title: '3 month goal', content: 'Body will have smaller fat percentage'},
    {id: '3', title: 'weekly goal', content: 'I will eat vegetables with every meal'}
  ]
}

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GOAL:
      let goal = {...action.goal, id: state.goals.length + 1};
      console.log(action.goal);
      return {
        goals: [
          ...state.goals,
          goal
        ]
      }
    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default goalReducer;