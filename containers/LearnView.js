import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import myStyles, {colors} from '../Styles';
import {FlatLearnList} from "../components/FlatLearnList";

export default class LearnView extends Component {
  static navigationOptions = {
    title: 'Topics',
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
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
          <FlatLearnList onRowPress={(params) => {this.navigateToListItem(params)}}/>
        </View>
    );
  }
}