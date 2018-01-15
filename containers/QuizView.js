import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import myStyles, {colors} from '../Styles';
import {FlatLearnList} from "../components/FlatLearnList";
import BackButton from "../components/BackButton";
import questions from "../QuestionContent";
import Button from "../components/Button";
import Icon from 'react-native-vector-icons/FontAwesome';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : false
    }
  }

  _onPress() {
    this.props.onRowPress(this.props.id);
    this.setState({selected : !this.state.selected});
  }

  render () {
    return (
        <TouchableHighlight onPress={() => {this._onPress()}}>
          <View style={myStyles.listitem}>
            <Text style={myStyles.buttontext}>{this.props.title}</Text>
            { this.state.selected ?
                <Icon name={'check'} size={20} style={{
                  position: 'absolute',
                  marginLeft: 10,
                  marginTop: 10,
                  color: '#fff'
                }}/> : null
            }
          </View>
        </TouchableHighlight>
    )
  }
}

export default class QuizView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Quiz',
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  })

  constructor(props) {
    super(props);
    this.state = {
      answers: Array(questions[0].answers.length).fill(false),
      qid: 0,
      quizfinish: false,
      score: 0,
      numSelected: 0,
    }
  }

  selectAnswer(id) {
    let newAnswers = this.state.answers;
    newAnswers[id] = !newAnswers[id];
    this.setState({answers : newAnswers});

    let newNumSelected = this.state.numSelected + (newAnswers[id] ? 1 : -1);
    this.setState({numSelected: newNumSelected});

    console.log(this.state.answers);
    console.log("Selected: " + newNumSelected);
  }

  submitAnswers() {
    let isCorrect = questions[this.state.qid].correctids.length == this.state.numSelected;
    for (i = 0; i < questions[this.state.qid].correctids.length; i++) {
      console.log("CHECK");
      console.log(this.state.answers[questions[this.state.qid].correctids[i]]);
      isCorrect = isCorrect && this.state.answers[questions[this.state.qid].correctids[i]];
    }
    if (isCorrect) {
      this.state.score++;
      this.setState(this.state);
    }


    this.nextQuestion();
    console.log(this.state.answers);

  }

  nextQuestion() {
    if (this.state.qid + 1 >= questions.length) {
      this.setState({quizFinish : true});
      //navigate(Results)
    } else {
      // Reset values for next question
      this.state.qid++;
      this.state.answers = Array(questions[this.state.qid].answers.length).fill(false);
      this.state.numSelected = 0;
      this.setState(this.state);
    }
  }

  render() {
    console.log(this.state.selected);
    if (this.state.quizFinish) {
      return (
          <View style={myStyles.container}>
            <Text style={myStyles.resulttext}>Congratulations, you've completed the quiz!</Text>
            <Text style={myStyles.resulttext}>You scored {this.state.score} points</Text>
          </View>
      );
    }
    return (
        <View style={myStyles.container}>
          <View style={myStyles.question}>
            <Text style={myStyles.questiontext}>{questions[this.state.qid].question}</Text>
            <FlatList style={myStyles.answersList}
                      data={questions[this.state.qid].answers}
                      renderItem={({item}) => <Answer title={item.text}
                                                      id={item.id}
                                                      onRowPress={(id) => {this.selectAnswer(id)}}/>}
            />
            <View style={myStyles.buttoncontainer}>
              <Button onPress={() => {this.submitAnswers()}} title={"SUBIMT"}/>
            </View>
          </View>
        </View>
    );
  }
}