import {
  CREATE_GOAL,
  CREATE_GOAL_ERROR,
  SET_GOALS,
  LOADING_DATA
} from '../types';

const initialState = {
  goals: [],
  loadingData: false,
  submittedData: false
}

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOALS:
      return {
        ...state,
        goals: action.payload,
        loadingData: false
      }
    case CREATE_GOAL:
      return {
        goals: [
          ...state.goals,
          action.payload
        ],
        submittedData: true
      }
    case CREATE_GOAL_ERROR:
      console.log('create project error', action.err);
      return state;
    case LOADING_DATA:
      return {
        ...state,
        loadingData: true,
        submittedData: false
      };
    default:
      return state;
  }
}

export default goalReducer;