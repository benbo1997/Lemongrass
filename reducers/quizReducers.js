import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';

const initialState = {
  questionid: 0,
};

function questions (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_QUESTION:
      return {
          ...state,
          questionid: action.newQuestionId,
      };
    default:
      return state;
  }
}

const quizReducers = combineReducers({
  questions,
});

export default quizReducers
