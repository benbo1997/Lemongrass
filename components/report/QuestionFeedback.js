import React, { Component } from 'react';
import { Text, Button, View, FlatList, Platform, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../../Styles';

export default class QuestionFeedback extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.question.question);
    console.log(this.props.question.correctid);
    return (
        <View style={myStyles.container}>
          <Text style={{
            fontFamily: Platform.OS === "android" ? 'sans-serif-light' :'AvenirNext-UltraLightItalic',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>{this.props.question.question}</Text>
          <Text style={{
            fontFamily: Platform.OS === "android" ? 'sans-serif-light' :'AvenirNext-UltraLightItalic',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>{this.props.question.correctid}</Text>
        </View>
    );
  }
}