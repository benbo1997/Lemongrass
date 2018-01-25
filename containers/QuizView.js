import React, { Component } from 'react';
import Question from "../components/quiz/Question";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeQuestion } from "../actions/quizActions";

function mapStateToProps(store){
  return { questions: store.questions }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)