import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import myStyles, {colors} from '../../Styles';
import BackButton from "../BackButton";
import questions from "../../QuestionContent";
import Button from "../Button";
import AnswerOption from "./AnswerOption";

export default class Question extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Quiz',
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  })

  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      answers: Array(questions[0].answers.length).fill(false),
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
    console.log("Question id: " + this.props.questions.questionid);
  }

  submitAnswers() {
    let qid = this.props.questions.questionid
    let isCorrect = questions[qid].correctids.length == this.state.numSelected;
    for (i = 0; i < questions[qid].correctids.length; i++) {
      console.log("CHECK");
      console.log(this.state.answers[questions[qid].correctids[i]]);
      isCorrect = isCorrect && this.state.answers[questions[qid].correctids[i]];
    }
    if (isCorrect) {
      this.state.score++;
      this.setState(this.state);
    }


    this.nextQuestion();
    console.log(this.state.answers);

  }

  nextQuestion() {
    if (this.props.questions.questionid + 1 >= questions.length) {
      this.setState({quizFinish : true});
      //navigate(Results)
    } else {
      // Reset values for next question
      this.props.changeQuestion(this.props.questions.questionid + 1);
      this.state.answers = Array(questions[this.props.questions.questionid].answers.length).fill(false);
      this.state.numSelected = 0;
      this.setState(this.state);
    }
  }

  render() {
    let qid = this.props.questions.questionid;

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
            <Text style={myStyles.questiontext}>{questions[qid].question}</Text>
            <FlatList style={myStyles.answersList}
                      data={questions[qid].answers}
                      renderItem={({item}) => <AnswerOption title={item.text}
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