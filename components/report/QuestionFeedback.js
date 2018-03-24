import React, { Component } from 'react';
import { Text, Button, View, FlatList, Platform, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import myStyles, {colors} from '../../Styles';

export default class QuestionFeedback extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.question.question);
    console.log(this.props.question.correctid);
    return (
        <View style={myStyles.listitem}>
          <Text style={{
            fontSize: 20,
            fontFamily: Platform.OS === "android" ? 'Roboto' :'Helvetica-Light',
            paddingLeft: 20,
            textAlignVertical: 'center'
          }}>{this.props.question.question}</Text>
          <Text style={{
            fontFamily: Platform.OS === "android" ? 'sans-serif-light' :'AvenirNext-UltraLightItalic',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>{"The correct answer was: " + this.props.question.answers[this.props.question.correctid].text}</Text>
          <Text style={{
            fontFamily: Platform.OS === "android" ? 'sans-serif-light' :'AvenirNext-UltraLightItalic',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>{this.props.question.explanation}</Text>
          <Icon name={this.props.isCorrect ? 'check' : 'times'} size={20} style={{
            position: 'absolute',
            marginLeft: 10,
            marginTop: 10,
            color: this.props.isCorrect ? colors.lemongreen : colors.wrong
          }}/>
        </View>
    );
  }
}