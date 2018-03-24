import {
  CHANGE_QUESTION,
  SUBMIT_ANSWER,
  RESET_QUIZ,
  LOAD_QUIZ_RECIEVED,
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

export function resetQuiz() {
  return {
    type: RESET_QUIZ,
  }
}

export function loadQuizRecieved(quiz) {
  return {
    type: LOAD_QUIZ_RECIEVED,
    quiz: quiz,
  }
}