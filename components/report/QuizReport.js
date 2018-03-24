import React, { Component } from 'react';
import {FlatList} from 'react-native';
import myStyles, {colors} from '../../Styles';
import QuestionFeedback from './QuestionFeedback';

export default class QuizReport extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
        <FlatList style={myStyles.optionlist}
                  data={this.props.content}
                  renderItem={({item}) => <QuestionFeedback question={item}/>}
        />
    );
  }
}