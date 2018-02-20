import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';

const initialQuestionsState = {
  questionid: 0,
  pastAnswers: [],
};

const initialQuizState = {
  quizzes: [],
};

function questions (state = initialQuestionsState, action) {
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

function quizzes (state = initialQuizState, action) {
  switch (action.type) {
    case types.LOAD_QUIZZES_RECIEVED:
      return {
          ...state,
          quizzes: action.quizzes,
      };
    default:
      return state;
  }
}

const quizReducers = combineReducers({
  questions,
  quizzes,
});

export default quizReducers
