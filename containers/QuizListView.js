import React, { Component } from 'react';
import QuizList from "../components/QuizList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadQuizRecieved } from "../actions/quizActions";

function mapStateToProps(store){
  return { quizzes: store.quizzes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadQuizRecieved  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)