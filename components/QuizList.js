import React, { Component } from 'react';
import { Text, Button, View, FlatList, Alert, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../Styles';
import TwoColourButton from "./TwoColourButton";
import BackButton from "./BackButton";
import questions from "../QuestionContent";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress() {
    const params = {
      title: this.props.title,
      quizid: this.props.id
    };
    console.log(this.props.title);
    console.log(this.props.id);
    this.props.onRowPress(params);
  }

  render () {
    return (
        <TwoColourButton
            title={this.props.title}
            description={this.props.description}
            onPress={() => {this._onPress()}}/>
    )
  }
}

export default class QuizList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'QuizList',
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  })

  navigateToListItem(params) {
    this.props.navigation.navigate('Quiz', params);
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    this.props.loadQuizRecieved(questions[0]);
  }

  componentDidMount() {
    this.setState({
      isLoading:false,
    })
  }

  render () {
    if (this.state.isLoading) {
      return (
          <Text style={myStyles.plaintext}>Loading!></Text>
      );
    }

    console.log(this.props.quizzes.quizzes);
    return (
        <FlatList style={myStyles.optionlist}
                  data={this.props.quizzes.quizzes}
                  renderItem={({item}) => <ListItem id={item.id}
                                                    title={item.title}
                                                    description={item.description}
                                                    onRowPress={(params) => {this.navigateToListItem(params)}}/>}
        />
    );
  }
}