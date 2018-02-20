import React, { Component } from 'react';
import Quiz from "../components/quiz/Quiz";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeQuestion, submitAnswer, loadQuizzesRecieved } from "../actions/quizActions";

function mapStateToProps(store){
  return { questions: store.questions, quizzes: store.quizzes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeQuestion, submitAnswer, loadQuizzesRecieved  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)