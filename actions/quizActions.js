import {
  CHANGE_QUESTION,
  SUBMIT_ANSWER
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