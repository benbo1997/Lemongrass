import React, { Component } from 'react';
import Quiz from "../components/quiz/Quiz";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeQuestion, submitAnswer, resetQuiz, loadQuizRecieved } from "../actions/quizActions";

function mapStateToProps(store){
  return { questions: store.questions, quizzes: store.quizzes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeQuestion, submitAnswer, resetQuiz, loadQuizRecieved  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)