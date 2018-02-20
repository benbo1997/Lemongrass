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
        var newAnswers = state.pastAnswers.slice();
        newAnswers[state.questionid] = action.answerId;
      return {
          ...state,
          pastAnswers: newAnswers,
      };
    default:
      return state;
  }
}

const quizReducers = combineReducers({
  questions,
});

export default quizReducers
