import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import myStyles, {colors} from '../../Styles';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
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
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  })

  constructor(props) {
    super(props);
    console.log("Hello");
    console.log(this.props.quizid);
    console.log(this.props.title);
    // this function loads our quiz data into the store
  }

  submitAnswer(id) {
    this.props.submitAnswer(id);
    this.nextQuestion();
  }

  nextQuestion() {
    let quizid = this.props.navigati
    this.props.changeQuestion(this.props.questions.questionid + 1);
  }

  isFinished() {
    let numQuestions = this.props.quizzes.quizzes[this.props.quizid].content.length;
    return this.props.questions.questionid >= numQuestions;
  }

  render() {
    console.log("Rendering...");
    console.log(this.props.questions);
    console.log(this.props.quizzes);
    let questionid = this.props.questions.questionid;
    let quizcontent = this.props.quizzes.quizzes[this.props.quizid].content;

    if (this.isFinished()) {
      return (
          <View style={myStyles.container}>
            <Text style={myStyles.resulttext}>Congratulations, you've completed the quiz!</Text>
            <Text style={myStyles.resulttext}>You scored {markQuiz(this.props.questions.pastAnswers, quizcontent)} points</Text>
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