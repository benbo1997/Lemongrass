import React, { Component } from 'react';
import { Text, View, SectionList, Alert, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../../Styles';
import questions from '../../QuestionContent';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={myStyles.question}>
            <Text style={myStyles.subtitle}>{questions[this.props.qid].question}</Text>
        </View>
    );
  }
}