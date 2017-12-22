import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NewsFeed } from './components/NewsFeed';
import { StackNavigator } from 'react-navigation';
import FundsView from './containers/FundsView';
import HomeView from './containers/HomeView';
import InfoView from './containers/InfoView';
import LearnView from './containers/LearnView';
import RiskQuestion from "./containers/questionnaire/RiskQuestion";
import PurposeQuestion from "./containers/questionnaire/PurposeQuestion";
import TimeQuestion from "./containers/questionnaire/TimeQuestion";
import ResultsQuestion from "./containers/questionnaire/ResultsQuestion";

const AppNav = StackNavigator(
    {
      Home: {screen: HomeView},
      Funds: {screen: FundsView},
      Info: {screen: InfoView},
      Learn: {screen: LearnView},
      RiskQ: {screen: RiskQuestion},
      PurposeQ: {screen: PurposeQuestion},
      TimeQ: {screen: TimeQuestion},
      ResultsQ: {screen: ResultsQuestion},
    },
    {
      cardStyle: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }
    });

export default class App extends Component {
  render() {
    return (
        <AppNav/>
    );
  }
}

