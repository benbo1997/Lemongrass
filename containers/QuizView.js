import React, { Component } from 'react';
import Quiz from "../components/quiz/Quiz";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeQuestion, setCurrentAnswer, submitAnswer } from "../actions/quizActions";

function mapStateToProps(store){
  return { questions: store.questions }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeQuestion, submitAnswer }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)