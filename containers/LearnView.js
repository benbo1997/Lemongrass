import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import myStyles, {colors} from '../Styles';
import {FlatLearnList} from "../components/FlatLearnList";
import BackButton from "../components/BackButton";

export default class LearnView extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
                      onPress={ () => { navigation.goBack() }} />,
  })

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