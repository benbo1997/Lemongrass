import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import myStyles, {colors} from '../../Styles';
import BackButton from "../BackButton";
import questions from "../../QuestionContent";
import Question from "./Question";

function markQuiz(answerArray) {
  let score = 0;

  for (i = 0; i < questions.length; i++) {
    if (questions[i].correctid == answerArray[i]) {
      score ++;
    }
  }

  return score;
}

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
    this.state = {
      answers: Array(questions[0].answers.length).fill(false),
      score: 'Over 9000'
    }
  }

  submitAnswer(id) {
    this.props.submitAnswer(id);
    this.nextQuestion();
  }

  nextQuestion() {
    this.props.changeQuestion(this.props.questions.questionid + 1);
  }

  isFinished() {
    return this.props.questions.questionid >= questions.length;
  }



  render() {
    console.log("Rendering...");
    console.log(this.props.questions);
    let qid = this.props.questions.questionid;

    if (this.isFinished()) {
      return (
          <View style={myStyles.container}>
            <Text style={myStyles.resulttext}>Congratulations, you've completed the quiz!</Text>
            <Text style={myStyles.resulttext}>You scored {markQuiz(this.props.questions.pastAnswers)} points</Text>
          </View>
      );
    }
    return (
        <View style={myStyles.container}>
          <Question text={questions[qid].question}
                    answerList={questions[qid].answers}
                    onSubmit={(id) => {this.submitAnswer(id)}}
          />
        </View>
    );
  }
}