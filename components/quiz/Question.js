import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import myStyles, {colors} from '../../Styles';
import BackButton from "../BackButton";
import questions from "../../QuestionContent";
import SubmitButton from "../SubmitButton";
import AnswerOption from "./AnswerOption";
import HintButton from "../HintButton";

export default class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currAnswer: -1,
    }
  }

  selectAnswer(id) {
    this.setState({currAnswer: id});
  }

  submitAnswer() {
    let finalAnswer = this.state.currAnswer;
    this.setState({currAnswer: -1});
    this.props.onSubmit(finalAnswer);
  }

  render() {
    // TODO lock in selected answer while submit button pressed
    return (
      <View style={myStyles.question}>
        <Text style={myStyles.questiontext}>{this.props.text}</Text>
        <FlatList style={myStyles.answersList}
                  data={this.props.answerList}
                  renderItem={({item}) => <AnswerOption title={item.text}
                                                        id={item.id}
                                                        isPressed={item.id === this.state.currAnswer}
                                                        onRowPress={(id) => {this.selectAnswer(id)}}/>}
                  currAnswer={this.state.currAnswer}
        />
        <HintButton/>
        <View style={myStyles.buttoncontainer}>
          <SubmitButton onPress={() => {this.submitAnswer()}} title={"SUBMIT"}/>
        </View>
      </View>
    );
  }
}