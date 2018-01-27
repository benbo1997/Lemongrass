import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FundsView from './containers/FundsView';
import HomeView from './containers/HomeView';
import InfoView from './containers/InfoView';
import LearnView from './containers/LearnView';
import QuizView from "./containers/QuizView";

const AppNav = StackNavigator(
    {
      Home: {screen: HomeView},
      Funds: {screen: FundsView},
      Info: {screen: InfoView},
      Learn: {screen: LearnView},
      Quiz: {screen: QuizView},
    },
    {
      cardStyle: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }
    });

export default class LemonGrassApp extends Component {
  render() {
    return (
        <AppNav/>
    );
  }
}