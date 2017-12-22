import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import myStyles from '../../Styles';

export default class PurposeQuestion extends Component {
  static navigationOptions = {
    title: 'PurposeQ',
    header: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {navigate} = this.props.navigation;
    console.log(this.props.navigation.state.params);
    return (
        <View style={myStyles.container}>
          <Button
              onPress = {() => {
                navigate('RiskQ', {purpose: "College"});
              }}
              title = "College"
          />
          <Button
              onPress = {() => {
                navigate('RiskQ', {purpose: "Bank alternative"});
              }}
              title = "Bank alternative"
          />
          <Button
              onPress = {() => {
                navigate('RiskQ', {purpose: "Retrieval"});
              }}
              title = "Retrieval"
          />
        </View>
    );
  }
}