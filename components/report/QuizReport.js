import React, { Component } from 'react';
import {FlatList} from 'react-native';
import Button from '../Button';
import myStyles, {colors} from '../../Styles';
import QuestionFeedback from './QuestionFeedback';

export default class QuizReport extends Component {

  constructor(props) {
    super(props);
    console.log("TEST");
    console.log(this.props.userAnswers);
  }

  render () {
    return (
        <FlatList style={myStyles.optionlist}
                  data={this.props.content}
                  renderItem={({item, index}) => <QuestionFeedback
                      question={item}
                      isCorrect={this.props.userAnswers[index] == item.correctid}/>}
        />
    );
  }
}