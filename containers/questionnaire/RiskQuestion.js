import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import myStyles from '../../Styles';

export default class RiskQuestion extends Component {
  static navigationOptions = {
    title: 'RiskQ',
    header: null
  }

  constructor(props) {
    super(props);
  }

  _getUpdatedOptions (risk) {
    options = {
      purpose: this.props.navigation.state.params.purpose,
      risk: risk
    }
    return options;
  }

  render() {
    let {navigate} = this.props.navigation;
    console.log(this.props.navigation.state.params);
    return (
        <View style={myStyles.container}>
          <Button
              onPress = {() => {
                navigate('TimeQ', this._getUpdatedOptions("Low"));
              }}
              title = "Low"
          />
          <Button
              onPress = {() => {
                navigate('TimeQ', this._getUpdatedOptions("Medium"));
              }}
              title = "Medium"
          />
          <Button
              onPress = {() => {
                navigate('TimeQ', this._getUpdatedOptions("High"));
              }}
              title = "High"
          />
        </View>
    );
  }
}