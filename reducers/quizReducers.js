import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';

const initialState = {
  questionid: 0,
  pastAnswers: [],
};

function questions (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_QUESTION:
      return {
          ...state,
          questionid: action.newQuestionId,
      };
    case types.SUBMIT_ANSWER:
      // this could be changed to update the index of the array based on
      // question id
      return {
          ...state,
          pastAnswers: [...state.pastAnswers, action.answerId],
      };
    default:
      return state;
  }
}

const quizReducers = combineReducers({
  questions,
});

export default quizReducers
