import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import myStyles, {colors} from '../Styles';
import {LearnList} from "../components/LearnList";

export default class LearnView extends Component {
  static navigationOptions = {
    title: 'Topics',
    headerStyle: {
      backgroundColor: colors.lemongreen
    },
    headerTitleStyle: {
      color: colors.lemontext
    }
  }

  constructor(props) {
    super(props);
  }

  navigateToListItem(params) {
    this.props.navigation.navigate('Info', params);
  }

  render() {
    let {navigate} = this.props.navigation;
    return (
        <View style={myStyles.container}>
          <LearnList onRowPress={(params) => {this.navigateToListItem(params)}}/>
        </View>
    );
  }
}