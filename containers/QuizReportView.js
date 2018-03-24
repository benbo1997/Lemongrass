import React, { Component } from 'react';
import {Image, Platform, Text, View} from 'react-native';
import BackButton from '../components/BackButton';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import myStyles, {colors} from '../Styles';
import QuizReport from "../components/report/QuizReport";

@withMappedNavigationProps()
export default class QuizReportView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  });

  render() {
    const {params} = this.props.navigation.state;
    // TODO remove hardcoded styles as in InfoView
    return (
        <View style={myStyles.container}>
          <QuizReport content={this.props.content} userAnswers={this.props.userAnswers}/>
        </View>
    );
  }
}