import {
  CHANGE_QUESTION,
  SUBMIT_ANSWER,
  LOAD_QUIZZES_RECIEVED
} from "./actionTypes";

export function changeQuestion(qid) {
  return {
    type: CHANGE_QUESTION,
    newQuestionId: qid,
  };
}

export function submitAnswer(id) {
  return {
    type: SUBMIT_ANSWER,
    answerId: id,
  }
}

export function loadQuizzesRecieved(quizzes) {
  return {
    type: LOAD_QUIZZES_RECIEVED,
    quizzes: quizzes,
  }
}