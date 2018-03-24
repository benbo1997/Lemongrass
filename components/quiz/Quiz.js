import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import Button from '../Button';
import myStyles, {colors} from '../../Styles';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import {Circle} from 'react-native-progress';
import PercentCircle from 'react-native-percent-circle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import BackButton from "../BackButton";
import questions from "../../QuestionContent";
import Question from "./Question";

function markQuiz(answerArray, questions) {
  let score = 0;

  for (i = 0; i < questions.length; i++) {
    if (questions[i].correctid == answerArray[i]) {
      score ++;
    }
  }

  return score;
}

@withMappedNavigationProps()
export default class Quiz extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Quiz',
    headerStyle: myStyles.header, headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  })

  constructor(props) {
    super(props);
  }

  submitAnswer(id) {
    this.props.submitAnswer(id);
    this.nextQuestion();
  }

  nextQuestion() {
    this.props.changeQuestion(this.props.questions.questionid + 1);
  }

  // For proceeding after quiz completion
  onProceed() {
    this.props.resetQuiz();
    this.props.navigation.navigate('QuizList');
  }

  onReport() {
    var params = {
      title: this.props.title,
      content: this.getQuizContent(this.props.quizid),
      userAnswers: this.props.questions.pastAnswers,
    };
    this.props.navigation.navigate('QuizReport', params);
  }

  getQuizContent(searchid) {
    for (var i = 0; i < this.props.quizzes.quizzes.length; i++) {
      if (this.props.quizzes.quizzes[i].id == searchid) {
        return this.props.quizzes.quizzes[i].content;
      }
    }
  }

  isFinished() {
    let numQuestions = this.getQuizContent(this.props.quizid).length;
    return this.props.questions.questionid >= numQuestions;
  }

  render() {
    console.log("Rendering Quiz...");
    let questionid = this.props.questions.questionid;
    let quizcontent = this.getQuizContent(this.props.quizid);

    if (this.isFinished()) {
      let score = markQuiz(this.props.questions.pastAnswers, quizcontent);
      return (
          <View style={myStyles.container}>
            <Text style={myStyles.resulttext}>Congratulations, you've completed the quiz!</Text>
            <Text style={myStyles.resulttext}>You scored {score} out of {quizcontent.length}</Text>
            <AnimatedCircularProgress
                size={120}
                width={15}
                fill={(score / quizcontent.length) * 100}
                rotation={0}
                tintColor={colors.gold}
                backgroundColor={colors.darkgrey}>
              {
                (fill) => (
                    <Text style={styles.points}>
                      { parseInt((score / quizcontent.length) * 100)} %
                    </Text>
                )
              }
            </AnimatedCircularProgress>
            <Button style={myStyles.button} title={"proceed"} onPress={() => {this.onProceed()}}/>
            <Button style={myStyles.button} title={"view report"} onPress={() => {this.onReport()}}/>
          </View>
      );
    }
    return (
        <View style={myStyles.container}>
          <Question text={quizcontent[questionid].question}
                    answerList={quizcontent[questionid].answers}
                    onSubmit={(id) => {this.submitAnswer(id)}}
          />
        </View>
    );
  }
}