import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';

const initialQuestionsState = {
  answered: 0,
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
    case types.RESET_QUIZ:
      // this currently updates the number of quizzes answered.
      return {
          answered: state.answered + 1,
          questionid: 0,
          pastAnswers: [],
      };
    default:
      return state;
  }
}

function quizzes (state = initialQuizState, action) {
  switch (action.type) {
    case types.LOAD_QUIZ_RECIEVED:
      // this is a potentially heavy check, however it is necessary in lieu of
      // an appropriate Set type
      if (state.quizzes.includes(action.quiz)) {
        return state;
      }
      return {
          ...state,
          quizzes:  [...state.quizzes, action.quiz],
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
