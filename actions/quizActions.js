import {CHANGE_QUESTION} from "./actionTypes";

export function changeQuestion(qid) {
  return {
    type: CHANGE_QUESTION,
    newQuestionId: qid,
  };
}